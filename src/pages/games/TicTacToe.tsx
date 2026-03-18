import { GameState } from "../../hooks/useGameSocket"
import "./TicTacToe.css"

export default function TicTacToe({ gameState, sendMove }: { gameState: GameState, sendMove: (move: number) => void }) {
  const { board, isPlaying, winner } = gameState

  const statusText = () => {
    if (winner)               return "Winner: " + winner
    if (board.every(Boolean)) return "It's a draw!"
    if (isPlaying)       return ""
  }

  return (
    <div className="ttt">

      <p className={`ttt__status`}>
        {statusText()}
      </p>

      <div className="ttt__board">
        {board.map((cell, i) => (
          <button
            key={i}
            className={`ttt__cell ${cell ? `ttt__cell--${cell}` : ""}`}
            onClick={() => sendMove(i)}
            disabled={!!cell || !isPlaying}
          >
            {cell}
          </button>
        ))}
      </div>
    </div>
  )
}