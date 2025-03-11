"use client"

import { useState, useRef, useEffect } from "react"
import GameList from "../components/GameList/GameList"
import GameDetails from "../components/GameList/GameDetails/GameDetails"
import MatchdaySelector from "../components/GameList/MatchdaySelector"
import type { Game } from "../types"
import { fetchGames } from "../services/api"
import Spinner from "../components/ui/spinner"

export default function Home() {
  const [games, setGames] = useState<Game[]>([])
  const [selectedGame, setSelectedGame] = useState<Game | null>(null)
  const [selectedMatchday, setSelectedMatchday] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const gameDetailsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function loadGames() {
      try {
        setIsLoading(true)
        const fetchedGames = await fetchGames()
        setGames(fetchedGames)
        setError(null)
      } catch (err) {
        setError("Failed to load games. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    loadGames()
  }, [])

  // Get unique matchdays from games
  const matchdays = Array.from(new Set(games.map((game) => game.matchday))).sort((a, b) => a - b)

  // Set default matchday on initial load
  useEffect(() => {
    if (matchdays.length > 0 && selectedMatchday === null) {
      setSelectedMatchday(matchdays[0])
    }
  }, [matchdays, selectedMatchday])

  // Filter games by selected matchday
  const filteredGames = selectedMatchday !== null ? games.filter((game) => game.matchday === selectedMatchday) : games

  const handleGameSelect = (game: Game) => {
    setSelectedGame(game)

    // Check if the screen width is less than 1024px (lg breakpoint in Tailwind)
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        gameDetailsRef.current?.scrollIntoView({ behavior: "smooth" })
      }, 100) // Small delay to ensure the DOM has updated
    }
  }

  const handleMatchdayChange = (matchday: number) => {
    setSelectedMatchday(matchday)
    setSelectedGame(null) // Reset selected game when changing matchday
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
        <span className="ml-2">Loading games...</span>
      </div>
    )
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">Premier League Games </h1>

        <div className="mb-6 flex justify-center">
          <MatchdaySelector
            matchdays={matchdays}
            selectedMatchday={selectedMatchday}
            onMatchdayChange={handleMatchdayChange}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 justify-center">
          <GameList games={filteredGames} onSelectGame={handleGameSelect} />
          <div ref={gameDetailsRef} className="w-full lg:w-[600px]">
            <GameDetails game={selectedGame} />
          </div>
        </div>
      </div>
    </main>
  )
}

