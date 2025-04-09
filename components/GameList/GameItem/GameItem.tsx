import MatchInformation from "./GameDetails/MatchInformation"
import Predictions from "./GameDetails/Predictions"

export default function GameItem({ game }: any) {
  
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
      <div className="flex  mb-6">
        <span className="text-3xl font-bold mr-4">{game.name}</span>
      </div>
      <div className="grid grid-cols-1 gap-6">
        <MatchInformation game={game} />
        <Predictions game={game} />
      </div>
    </div>
  )
}
