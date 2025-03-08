import Image from "next/image"
import type { Game } from "../types"
import MatchInformation from "./MatchInformation"
import AdditionalInformation from "./AdditionalInformation"

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
        <MatchInformation game={game} />
        <AdditionalInformation game={game} />
      </div>
    </div>
  )
}
