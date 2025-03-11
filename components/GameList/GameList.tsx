import Image from "next/image"
import type { Game } from "../../types"

interface GameListProps {
  games: Game[]
  onSelectGame: (game: Game) => void
}

export default function GameList({ games, onSelectGame }: GameListProps) {
  return (
    <div className="w-full lg:w-[400px]">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700">Upcoming Games</h2>
      <ul className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto pr-4">
        {games.map((game) => (
          <li
            key={game.id}
            className="bg-white shadow-lg rounded-lg p-4 cursor-pointer hover:bg-blue-50 transition-colors border-l-4 border-blue-500"
            onClick={() => onSelectGame(game)}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                {/*<Image
                  src={game.homeTeamLogo || "/placeholder.svg"}
                  alt={game.homeTeam}
                  width={30}
                  height={30}
                  className="mr-2"
                />*/}
                <span className="font-semibold text-blue-800">{game.homeTeam}</span>
              </div>
              <span className="text-gray-600">vs</span>
              <div className="flex items-center">
                <span className="font-semibold text-blue-800">{game.awayTeam}</span>
                {/*<Image
                  src={game.awayTeamLogo || "/placeholder.svg"}
                  alt={game.awayTeam}
                  width={30}
                  height={30}
                  className="ml-2"
                />*/}
              </div>
            </div>
            <div className="text-sm text-gray-600 mt-2">
              <span className="inline-block bg-blue-100 rounded-full px-2 py-1 text-xs font-semibold text-blue-700 mr-2">
                {game.date}
              </span>
              <span className="inline-block bg-green-100 rounded-full px-2 py-1 text-xs font-semibold text-green-700">
                {game.time}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

