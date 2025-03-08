import Image from "next/image"
import type { Game } from "../types"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="team-lineups">
              <AccordionTrigger className="text-blue-600 hover:text-blue-800">Team Lineups</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-700 mb-2">{game.homeTeam}</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>David De Gea (GK)</li>
                      <li>Aaron Wan-Bissaka</li>
                      <li>Harry Maguire (C)</li>
                      <li>Raphael Varane</li>
                      <li>Luke Shaw</li>
                      <li>Scott McTominay</li>
                      <li>Bruno Fernandes</li>
                      <li>Jadon Sancho</li>
                      <li>Marcus Rashford</li>
                      <li>Cristiano Ronaldo</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-700 mb-2">{game.awayTeam}</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Alisson Becker (GK)</li>
                      <li>Trent Alexander-Arnold</li>
                      <li>Virgil van Dijk (C)</li>
                      <li>Joel Matip</li>
                      <li>Andrew Robertson</li>
                      <li>Fabinho</li>
                      <li>Jordan Henderson</li>
                      <li>Thiago Alcantara</li>
                      <li>Mohamed Salah</li>
                      <li>Roberto Firmino</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

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

            <AccordionItem value="key-events">
              <AccordionTrigger className="text-blue-600 hover:text-blue-800">Key Events Timeline</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                      12'
                    </span>
                    <div>
                      <span className="font-semibold">Goal!</span> Marcus Rashford scores for {game.homeTeam}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                      24'
                    </span>
                    <div>
                      <span className="font-semibold">Yellow Card</span> - Jordan Henderson ({game.awayTeam})
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                      37'
                    </span>
                    <div>
                      <span className="font-semibold">Goal!</span> Mohamed Salah scores for {game.awayTeam}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                      45+2'
                    </span>
                    <div>
                      <span className="font-semibold">Half Time</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                      67'
                    </span>
                    <div>
                      <span className="font-semibold">Goal!</span> Bruno Fernandes scores for {game.homeTeam}
                    </div>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="player-performance">
              <AccordionTrigger className="text-blue-600 hover:text-blue-800">Player Performance Data</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-700 mb-2">Top Performers</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="font-semibold">{game.homeTeam}</div>
                        <div className="text-sm">Bruno Fernandes</div>
                        <div className="text-xs text-gray-600">1 goal, 1 assist, 4 key passes</div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="font-semibold">{game.awayTeam}</div>
                        <div className="text-sm">Mohamed Salah</div>
                        <div className="text-xs text-gray-600">1 goal, 0 assists, 3 shots on target</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-700 mb-2">Player Ratings</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm font-medium">{game.homeTeam}</div>
                        <ul className="text-xs space-y-1">
                          <li className="flex justify-between">
                            <span>Bruno Fernandes</span>
                            <span className="font-semibold">8.7</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Marcus Rashford</span>
                            <span className="font-semibold">8.2</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Cristiano Ronaldo</span>
                            <span className="font-semibold">7.5</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="text-sm font-medium">{game.awayTeam}</div>
                        <ul className="text-xs space-y-1">
                          <li className="flex justify-between">
                            <span>Mohamed Salah</span>
                            <span className="font-semibold">8.4</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Virgil van Dijk</span>
                            <span className="font-semibold">7.8</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Alisson Becker</span>
                            <span className="font-semibold">7.6</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pre-match-analysis">
              <AccordionTrigger className="text-blue-600 hover:text-blue-800">Pre-match Analysis</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 text-gray-700">
                  <p>
                    The rivalry between {game.homeTeam} and {game.awayTeam} is one of the most storied in English
                    football, with both teams having a rich history of competitive matches.
                  </p>
                  <p>
                    {game.homeTeam} comes into this match after a string of impressive performances, having won their
                    last three league games. Their attacking trio has been in excellent form, contributing to 8 goals in
                    those matches.
                  </p>
                  <p>
                    {game.awayTeam}, on the other hand, has had mixed results in recent weeks but remains a formidable
                    opponent. Their solid defensive record this season makes them difficult to break down, having
                    conceded only 12 goals in 15 matches.
                  </p>
                  <p>
                    The key battle to watch will be between {game.homeTeam}'s midfield maestro Bruno Fernandes and{" "}
                    {game.awayTeam}'s defensive anchor Fabinho. Whoever wins this duel could well determine the outcome
                    of the match.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="weather-conditions">
              <AccordionTrigger className="text-blue-600 hover:text-blue-800">Weather Conditions</AccordionTrigger>
              <AccordionContent>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-semibold">Partly Cloudy</div>
                    <div className="text-sm text-gray-600">Temperature: 12°C / 54°F</div>
                    <div className="text-sm text-gray-600">Humidity: 65%</div>
                    <div className="text-sm text-gray-600">Wind: 8 km/h</div>
                    <div className="text-sm text-gray-600 mt-2">
                      The mild conditions should favor an open, attacking game with minimal impact on ball movement or
                      player comfort.
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}