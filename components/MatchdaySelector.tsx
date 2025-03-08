"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface MatchdaySelectorProps {
  matchdays: number[]
  selectedMatchday: number | null
  onMatchdayChange: (matchday: number) => void
}

export default function MatchdaySelector({ matchdays, selectedMatchday, onMatchdayChange }: MatchdaySelectorProps) {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="matchday-select" className="font-semibold text-blue-800">
        Matchday:
      </label>
      <Select
        value={selectedMatchday?.toString() || ""}
        onValueChange={(value) => onMatchdayChange(Number.parseInt(value))}
      >
        <SelectTrigger className="w-[180px] bg-white">
          <SelectValue placeholder="Select matchday" />
        </SelectTrigger>
        <SelectContent>
          {matchdays.map((matchday) => (
            <SelectItem key={matchday} value={matchday.toString()}>
              Matchday {matchday}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

