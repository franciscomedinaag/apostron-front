import type { Game, GameDetails } from "../../../../types"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useEffect, useState } from "react"
import { fetchGameDetails } from "@/services/api"
import Spinner from "@/components/ui/spinner"

interface PredictionsProps {
  game: Game
}

export default function Predictions({ game }: PredictionsProps) {
  const [gameDetails, setGameDetails] = useState<GameDetails | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadGameDetails() {
      if (!game) {
        setGameDetails(null)
        return
      }

      setIsLoading(true)
      setError(null)

      try {
        const details = await fetchGameDetails(game.id)
        console.log("gameDetails: ", details)
        setGameDetails(details)
      } catch (err) {
        setError("Failed to load game details. Please try again.")
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    loadGameDetails()
  }, [game])

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-blue-700">Predictions</h3>

      { isLoading ?
          <div className="flex items-center justify-center">
            <Spinner/>
            <p className="ml-2 text-center text-gray-500 text-xl">Loading game details...</p>
          </div>
      : error ?
        <div className="flex items-center justify-center">
          <p className="text-center text-red-500 text-xl">{error}</p>
        </div>
      : gameDetails &&
        <Accordion type="single" collapsible className="w-full">

          <>
            {
              /* TODO: Just display this section when the game was already played 
              <AccordionItem value="match-statistics">
                <AccordionTrigger className="text-blue-600 hover:text-blue-800">Match Statistics</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">{game.homeTeam}</span>
                      <span className="text-gray-600">Possession</span>
                      <span className="font-semibold">{game.awayTeam}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>45%</span>
                      <div className="w-1/2 bg-gray-200 rounded-full h-2.5 mx-2">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "45%" }}></div>
                      </div>
                      <span>55%</span>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span>12</span>
                      <span className="text-gray-600">Shots</span>
                      <span>15</span>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span>5</span>
                      <span className="text-gray-600">Shots on Target</span>
                      <span>7</span>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span>3</span>
                      <span className="text-gray-600">Corners</span>
                      <span>6</span>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span>2</span>
                      <span className="text-gray-600">Yellow Cards</span>
                      <span>1</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              */
            }
          </>

          <AccordionItem value="result">
            <AccordionTrigger className="text-blue-600 hover:text-blue-800">{game.homeTeam} Wins</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 text-gray-700">
                <p>
                  It's more likely that {game.homeTeam} win this game instead of {game.awayTeam} because of ...
                </p>
                <div className="flex justify-between items-center">
                  <span>45%</span>
                  <div className="w-1/2 bg-gray-200 rounded-full h-2.5 mx-2">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "45%" }}></div>
                  </div>
                  <span>55%</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="over-under-goals">
            <AccordionTrigger className="text-blue-600 hover:text-blue-800">Over 2.5 goals</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 text-gray-700">
                <p>
                  For this game we expect an over of 2 goals because of...
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="both-teams-to-score">
            <AccordionTrigger className="text-blue-600 hover:text-blue-800">Both teams to score</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 text-gray-700">
                <p>
                  For this game we expect both teams to score beacuse ...
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="over-under-corners">
            <AccordionTrigger className="text-blue-600 hover:text-blue-800">Under 7.5 corners</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 text-gray-700">
                <p>
                  For this game we expect an under of 7 corners because of...
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="over-under-cards">
            <AccordionTrigger className="text-blue-600 hover:text-blue-800">Under 1 card</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 text-gray-700">
                <p>
                  For this game we expect an under of 1 card because of...
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="top-strikers">
            <AccordionTrigger className="text-blue-600 hover:text-blue-800">Top strikers stats</AccordionTrigger>
            <AccordionContent>
            <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">{game.homeTeam}</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Jadon Sancho: 3 total shots, 1 shot(s) on target and 0.54 goals</li>
                    <li>Marcus Rashford: 3 total shots, 1 shot(s) on target and 0.54 goals</li>
                    <li>Cristiano Ronaldo: 3 total shots, 1 shot(s) on target and 0.54 goals</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">{game.awayTeam}</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Thiago Alcantara: 3 total shots, 1 shot(s) on target and 0.54 goals</li>
                    <li>Mohamed Salah: 3 total shots, 1 shot(s) on target and 0.54 goals</li>
                    <li>Roberto Firmino: 3 total shots, 1 shot(s) on target and 0.54 goals</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="recommendations">
            <AccordionTrigger className="text-blue-600 hover:text-blue-800">Pick recommendations</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 text-gray-700">
                <h4 className=" mb-2">Our most sincere pick recommendations</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>{game.homeTeam} wins</li>
                  <li>Mohamed Salah scores</li>
                  <li>Both teams get a yellow card</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="trends">
            <AccordionTrigger className="text-blue-600 hover:text-blue-800">Trends</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 text-gray-700">
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>{game.homeTeam} won 4/5 last games</li>
                  <li>{game.awayTeam} scored first 5/6 last games</li>
                  <li>{game.awayTeam} under 2.5 goals 3/5 games</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        
        </Accordion>
      }
      
    </div>
  )
}
