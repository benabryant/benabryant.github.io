import { useNavigate } from "react-router-dom"
import PageHeader from "../components/PageHeader"
import "./GamesPage.css"

const GAMES = [
  {
    id:          "tictactoe",
    title:       "Tic-Tac-Toe",
    description: "Classic two-player strategy game.",
    players:     "2 players",
  },
]

export default function GamesPage() {
  const navigate = useNavigate()

  return (
    <div className="page-layout">
      <PageHeader />
      <main className="games-page">
        <div className="section__inner">
          <h2>Games</h2>
          <div className="games-page__grid">
            {GAMES.map((game) => (
              <button
                key={game.id}
                className="games-page__card icon-btn"
                onClick={() => navigate(`/games/${game.id}`)}
              >
                <span className="games-page__title">{game.title}</span>
                <span className="games-page__desc">{game.description}</span>
                <span className="games-page__players">{game.players}</span>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}