import type { Game } from "../types"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface AdditionalInformationProps {
  game: Game
}

export default function AdditionalInformation({ game }: AdditionalInformationProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-blue-700">Predictions</h3>
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

        <AccordionItem value="pre-match-analysis">
          <AccordionTrigger className="text-blue-600 hover:text-blue-800">Pre-match Analysis</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 text-gray-700">
              <p>
                Here we are gonna show the explanation of this pick between {game.homeTeam} and {game.awayTeam}
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        
      </Accordion>
    </div>
  )
}
