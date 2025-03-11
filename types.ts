export interface Game {
  id: number
  homeTeam: string
  awayTeam: string
  date: string
  time: string
  venue: string
  score: string
  homeTeamLogo: string
  awayTeamLogo: string
  matchday: number
}

export interface GameDetails extends Game {
  lineups: {
    homeTeam: string[]
    awayTeam: string[]
  }
  statistics: {
    possession: { home: number; away: number }
    shots: { home: number; away: number }
    shotsOnTarget: { home: number; away: number }
    corners: { home: number; away: number }
    fouls: { home: number; away: number }
  }
  events: Array<{
    time: string
    description: string
  }>
  weather: {
    condition: string
    temperature: number
    humidity: number
    windSpeed: number
  }
}