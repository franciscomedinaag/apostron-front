import type { Game } from "../types"

interface MatchInformationProps {
  game: Game
}

export default function MatchInformation({ game }: MatchInformationProps) {
  return (
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
  )
}
