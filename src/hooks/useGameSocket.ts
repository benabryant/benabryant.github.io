import { useEffect, useRef } from "react"
import { io, Socket } from "socket.io-client"

const SERVER = import.meta.env.DEV
  ? "http://localhost:8000"
  : "https://games-0lha.onrender.com"

export interface GameState {
  board:     (string | null)[]
  isPlaying: boolean
  winner:    string | null
}

export interface GameError {
  code:    string
  message: string
}

interface UseGameSocketOptions {
  onRoomCreated:   (roomId: string) => void
  onPlayerJoined:  (state: GameState) => void
  onGameStarted:   (state: GameState) => void
  onMoveMade:      (state: GameState) => void
  onOpponentLeft:  (state: GameState) => void
  onError:         (err: GameError) => void
}

export function useGameSocket(options: UseGameSocketOptions) {
  const socketRef = useRef<Socket | null>(null)
  const roomIdRef = useRef<string | null>(null)

  useEffect(() => {
    const socket = io(SERVER, { transports: ["websocket"] })
    socketRef.current = socket

    socket.on("room_created",  (d: { room_id: string }) => {
      roomIdRef.current = d.room_id
      options.onRoomCreated(d.room_id)
    })
    socket.on("player_joined", (s: GameState) => options.onPlayerJoined(s))
    socket.on("game_started",  (s: GameState) => options.onGameStarted(s))
    socket.on("move_made",     (s: GameState) => options.onMoveMade(s))
    socket.on("opponent_left", (s: GameState) => options.onOpponentLeft(s))
    socket.on("error",         (e: GameError) => options.onError(e))

    const keepAlive = setInterval(() => socket.emit("ping"), 10 * 60 * 1000)

    return () => {
      clearInterval(keepAlive)
      socket.disconnect()
    }
  }, [])

  const createRoom = (gameType: string) => {
    socketRef.current?.emit("create_room", { game_type: gameType })
  }

  const joinRoom = (roomId: string) => {
    socketRef.current?.emit("join_room", { room_id: roomId })
    roomIdRef.current = roomId
  }

  const startGame = () => {
    if (!roomIdRef.current) return
    socketRef.current?.emit("start_game", { room_id: roomIdRef.current })
  }

  const sendMove = (move: number) => {
    if (!roomIdRef.current) return
    socketRef.current?.emit("make_move", { room_id: roomIdRef.current, move })
  }

  return { createRoom, joinRoom, startGame, sendMove }
}
