import type { Game } from "../../types"

interface GameListProps {
  games: any[]
  onSelectGame: (game: Game) => void
}

export default function GameList({ games, onSelectGame }: GameListProps) {
  return (
    <div className="w-full lg:w-[400px]">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700">Upcoming Games</h2>
      <ul className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto pr-4">
        {games.map((game) => (
          <li
            key={game.gameId}
            className="bg-white shadow-lg rounded-lg p-4 cursor-pointer hover:bg-blue-50 transition-colors border-l-4 border-blue-500"
            onClick={() => onSelectGame(game)}
          >
            <div className="flex items-center justify-center mb-2">
              <div className="flex items-center">
                <span className="font-semibold text-blue-800">{game.name}</span>
              </div>
            </div>
            <div className="text-sm flex items-center justify-center text-gray-600 mt-2">
              <span className="inline-block bg-gray-100 rounded-full px-2 py-1 text-s font-semibold text-gray-700">
                {game.date}
              </span>
              {
                game.resultInfo !== "Not Played" && (
                  <span className="inline-block bg-blue-100 rounded-full px-2 py-1 text-s font-semibold text-blue-700 ml-3">
                    CONCLUDED
                  </span>
                )
              }
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

