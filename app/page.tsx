"use client"

import { useState, useRef, useEffect } from "react"
import GameList from "../components/GameList/GameList"
import GameDetails from "../components/GameList/GameItem/GameItem"
import MatchdaySelector from "../components/GameList/MatchdaySelector"
import { fetchGames } from "../services/api"
import Spinner from "../components/ui/spinner"

export default function Home() {
  const [games, setGames] = useState<any>([])
  const [selectedGame, setSelectedGame] = useState<any | null>(null)
  const [selectedMatchday, setSelectedMatchday] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const gameDetailsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function loadGames() {
      try {
        const getGames = async () => {
          setIsLoading(true)
          const fetchedGames = await fetchGames();
          setGames(fetchedGames)
          setError(null)
        }
        getGames()
      } catch (err) {
        setError("Failed to load games. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    loadGames()
  }, [])

  const matchdays = Array.from(new Set(games.map((game:any) => game.matchday))).sort((a:any, b:any) => a - b)

  useEffect(() => {
    if (matchdays.length > 0 && selectedMatchday === null) {
      setSelectedMatchday(matchdays[0])
    }
  }, [matchdays, selectedMatchday])

  const filteredGames = selectedMatchday !== null ? games.filter((game:any) => game.matchday === selectedMatchday.toString()) : games

  const handleGameSelect = (game: any) => {
    setSelectedGame(game)

    if (window.innerWidth < 1024) {
      setTimeout(() => {
        gameDetailsRef.current?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    }
  }

  const handleMatchdayChange = (matchday: number) => {
    setSelectedMatchday(matchday)
    setSelectedGame(null)
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

