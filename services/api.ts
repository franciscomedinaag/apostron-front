import type { GameDetails } from "../types"

export async function fetchGames() {
  try {
    const response = await fetch("http://localhost:8787/apostron/fixtures");
    const games = await response.json();
    return games;
  } catch (err) {
    console.log("Error from API: ", err);
  }
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
