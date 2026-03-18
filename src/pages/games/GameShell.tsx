import { useState } from "react"
import { useParams, Navigate } from "react-router-dom"
import PageHeader from "../../components/PageHeader"
import TicTacToe from "./tictactoe"
import { useGameSocket, GameState, GameError } from "../../hooks/useGameSocket"
import "./GameShell.css"

const GAME_COMPONENTS: Record<string, React.ComponentType<any>> = {
  "tictactoe": TicTacToe,
}

const GAME_LABELS: Record<string, string> = {
  "tictactoe": "Tic-Tac-Toe",
}

type GamePhase = "lobby" | "waiting_to_start" | "playing"

export default function GameShell() {
  const { gameId } = useParams<{ gameId: string }>()
  const [phase, setPhase] = useState<GamePhase>("lobby")
  const [roomId, setRoomId] = useState<string>("")
  const [inputValue, setInputValue] = useState<string>("")
  const [gameState, setGameState] = useState<GameState | null>(null)
  const [opponentLeft, setOpponentLeft] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const { createRoom, joinRoom, startGame, sendMove } = useGameSocket({
    onRoomCreated: (id) => {
      setRoomId(id)
      setPhase("waiting_to_start")
    },
    onPlayerJoined: (state) => {
      setGameState(state)
      setPhase("waiting_to_start")
      setError(null)
    },
    onGameStarted: (state) => {
      setGameState(state)
      setPhase("playing")
      setError(null)
    },
    onMoveMade: (state) => { setGameState(state); setError(null) },
    onOpponentLeft: (state) => { setGameState(state); setOpponentLeft(true) },
    onError: (e: GameError) => setError(e.message),
  })

  if (!gameId || !GAME_COMPONENTS[gameId]) {
    return <Navigate to="/games" replace />
  }

  const GameComponent = GAME_COMPONENTS[gameId]

  const handleCreate = () => {
    createRoom(gameId)
  }

  const handleJoin = () => {
    const id = inputValue.trim().toUpperCase()
    if (!id) return
    setRoomId(id)
    joinRoom(id)
  }

  if (phase === "playing" && gameState) {
    return (
      <div className="page-layout">
        <PageHeader />
        <main className="game-shell">
          {opponentLeft ? (
            <div className="game-shell__notice">
              <p>Opponent disconnected.</p>
              <button className="icon-btn" onClick={() => window.location.reload()}>
                Back to Lobby
              </button>
            </div>
          ) : (
            <GameComponent
              gameState={gameState}
              sendMove={sendMove}
            />
          )}
        </main>
      </div>
    )
  }

  return (
    <div className="page-layout">
      <PageHeader />
      <main className="game-shell">
        <div className="game-shell__lobby">
          <h2>{GAME_LABELS[gameId]}</h2>

          {error && <p className="game-shell__error">{error}</p>}

          {phase === "lobby" && (
            <>
              <p className="game-shell__subtitle">
                Create a room and share the code, or join an existing one.
              </p>
              <div className="game-shell__actions">
                <button className="icon-btn game-shell__btn" onClick={handleCreate}>
                  Create Room
                </button>
                <div className="game-shell__join">
                  <input
                    className="game-shell__input"
                    placeholder="Room code"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleJoin()}
                    maxLength={8}
                  />
                  <button className="icon-btn game-shell__btn" onClick={handleJoin}>
                    Join Room
                  </button>
                </div>
              </div>
            </>
          )}


          {phase === "waiting_to_start" && (
            <>
              <p className="game-shell__subtitle">
                Share this code with other players:
              </p>
              <div className="game-shell__code">{roomId}</div>
              <button className="icon-btn game-shell__btn" onClick={startGame}>
                Start Game
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  )
}