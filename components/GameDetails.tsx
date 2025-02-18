import Image from "next/image"
import type { Game } from "../types"

interface GameDetailsProps {
  game: Game | null
}

export default function GameDetails({ game }: GameDetailsProps) {
  if (!game) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-8 h-[calc(100vh-200px)] w-full">
        <p className="text-center text-gray-500 text-xl">Select a game to view details</p>
      </div>
    )
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 h-[calc(100vh-200px)] overflow-y-auto w-full">
      <h2 className="text-3xl font-bold mb-6 text-blue-800 border-b-2 border-blue-200 pb-2">Game Details</h2>
      <div className="flex justify-center items-center mb-6">
        <div className="flex items-center">
          <Image src={game.homeTeamLogo || "/placeholder.svg"} alt={game.homeTeam} width={60} height={60} />
          <span className="text-2xl font-bold mx-4">{game.homeTeam}</span>
        </div>
        <span className="text-3xl font-bold mx-4">vs</span>
        <div className="flex items-center">
          <span className="text-2xl font-bold mx-4">{game.awayTeam}</span>
          <Image src={game.awayTeamLogo || "/placeholder.svg"} alt={game.awayTeam} width={60} height={60} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-700">Match Information</h3>
          <p className="mb-2">
            <span className="font-semibold text-blue-600">Date:</span> {game.date}
          </p>
          <p className="mb-2">
            <span className="font-semibold text-blue-600">Time:</span> {game.time}
          </p>
          <p className="mb-2">
            <span className="font-semibold text-blue-600">Venue:</span> {game.venue}
          </p>
          <p className="mb-2">
            <span className="font-semibold text-blue-600">Current Score:</span> {game.score}
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-700">Additional Information</h3>
          <p className="text-gray-600 mb-4">
            This section is prepared for future additional information about the game, such as:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Team lineups</li>
            <li>Match statistics</li>
            <li>Key events timeline</li>
            <li>Player performance data</li>
            <li>Pre-match analysis</li>
            <li>Weather conditions</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

