import type { Game, GameDetails } from "../types"

const mockGames: Game[] = [
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
    matchday: 1,
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
    matchday: 1,
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
    matchday: 1,
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
    matchday: 2,
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
    matchday: 2,
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
    matchday: 2,
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
    matchday: 3,
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
    matchday: 3,
  },
]

export async function fetchGames(): Promise<Game[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Simulate potential API error (uncomment to test error handling)
  // if (Math.random() < 0.3) throw new Error("Failed to fetch games")

  return mockGames
}

export async function fetchGameDetails(gameId: number): Promise<GameDetails> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800))
  
    // Simulate potential API error (uncomment to test error handling)
    // if (Math.random() < 0.1) throw new Error("Failed to fetch game details")
  
    // Mock game details
    const gameDetails: GameDetails = {
      id: gameId,
      homeTeam: "Team A",
      awayTeam: "Team B",
      date: "2023-12-10",
      time: "15:00",
      venue: "Stadium X",
      score: "2 - 1",
      homeTeamLogo: "/placeholder.svg?height=50&width=50",
      awayTeamLogo: "/placeholder.svg?height=50&width=50",
      matchday: 1,
      lineups: {
        homeTeam: ["Player 1", "Player 2", "Player 3", "Player 4", "Player 5"],
        awayTeam: ["Player A", "Player B", "Player C", "Player D", "Player E"],
      },
      statistics: {
        possession: { home: 55, away: 45 },
        shots: { home: 12, away: 10 },
        shotsOnTarget: { home: 5, away: 4 },
        corners: { home: 6, away: 4 },
        fouls: { home: 10, away: 12 },
      },
      events: [
        { time: "12'", description: "Goal for Team A" },
        { time: "34'", description: "Yellow card for Team B" },
        { time: "67'", description: "Goal for Team B" },
      ],
      weather: {
        condition: "Partly Cloudy",
        temperature: 18,
        humidity: 65,
        windSpeed: 8,
      },
    }
  
    return gameDetails
  }
