"use client"

import { useState, useRef } from "react"
import GameList from "../components/GameList"
import GameDetails from "../components/GameDetails"
import type { Game } from "../types"

const games: Game[] = [
  {
    id: 1,
    homeTeam: "Manchester United",
    awayTeam: "Liverpool",
    date: "2023-12-10",
    time: "15:00",
    venue: "Old Trafford",
    score: "2 - 1",
    homeTeamLogo: "/placeholder.svg?height=50&width=50",
    awayTeamLogo: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 2,
    homeTeam: "Arsenal",
    awayTeam: "Chelsea",
    date: "2023-12-11",
    time: "17:30",
    venue: "Emirates Stadium",
    score: "0 - 0",
    homeTeamLogo: "/placeholder.svg?height=50&width=50",
    awayTeamLogo: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 3,
    homeTeam: "Barcelona",
    awayTeam: "Real Madrid",
    date: "2023-12-12",
    time: "20:00",
    venue: "Camp Nou",
    score: "3 - 2",
    homeTeamLogo: "/placeholder.svg?height=50&width=50",
    awayTeamLogo: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 4,
    homeTeam: "Bayern Munich",
    awayTeam: "Borussia Dortmund",
    date: "2023-12-13",
    time: "18:45",
    venue: "Allianz Arena",
    score: "4 - 1",
    homeTeamLogo: "/placeholder.svg?height=50&width=50",
    awayTeamLogo: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 5,
    homeTeam: "Paris Saint-Germain",
    awayTeam: "Marseille",
    date: "2023-12-14",
    time: "21:00",
    venue: "Parc des Princes",
    score: "2 - 0",
    homeTeamLogo: "/placeholder.svg?height=50&width=50",
    awayTeamLogo: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 6,
    homeTeam: "Juventus",
    awayTeam: "AC Milan",
    date: "2023-12-15",
    time: "20:45",
    venue: "Allianz Stadium",
    score: "1 - 1",
    homeTeamLogo: "/placeholder.svg?height=50&width=50",
    awayTeamLogo: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 7,
    homeTeam: "Ajax",
    awayTeam: "PSV",
    date: "2023-12-16",
    time: "16:30",
    venue: "Johan Cruyff Arena",
    score: "2 - 2",
    homeTeamLogo: "/placeholder.svg?height=50&width=50",
    awayTeamLogo: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 8,
    homeTeam: "Porto",
    awayTeam: "Benfica",
    date: "2023-12-17",
    time: "21:30",
    venue: "Estádio do Dragão",
    score: "0 - 1",
    homeTeamLogo: "/placeholder.svg?height=50&width=50",
    awayTeamLogo: "/placeholder.svg?height=50&width=50",
  },
]

export default function Home() {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null)
  const gameDetailsRef = useRef<HTMLDivElement>(null)

  const handleGameSelect = (game: Game) => {
    setSelectedGame(game)

    // Check if the screen width is less than 1024px (lg breakpoint in Tailwind)
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        gameDetailsRef.current?.scrollIntoView({ behavior: "smooth" })
      }, 100) // Small delay to ensure the DOM has updated
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">Soccer Games</h1>
        <div className="flex flex-col lg:flex-row gap-8 justify-center">
          <GameList games={games} onSelectGame={handleGameSelect} />
          <div ref={gameDetailsRef} className="w-full lg:w-[600px]">
            <GameDetails game={selectedGame} />
          </div>
        </div>
      </div>
    </main>
  )
}

