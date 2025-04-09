import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useEffect, useState } from "react"
import { fetchPredictions } from "@/services/api"
import Spinner from "@/components/ui/spinner"


export default function Predictions({ game }: any) {
  const [gamePredictions, setGamePredictions] = useState<any | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadGamePredictions() {
      if (!game) {
        setGamePredictions(null)
        return
      }

      setIsLoading(true)
      setError(null)

      try {
        const predictions = await fetchPredictions(game.gameId)
        console.log("gamePredictions: ", predictions)
        setGamePredictions(predictions)
      } catch (err) {
        setError("Failed to load game predictions. Please try again.")
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    loadGamePredictions()
  }, [game])

  const generatePredictionText = (prediction:any) => {
    switch (prediction.market_id) {
      case 1: 
        return prediction.label === "Draw" ? `Draw` : `${prediction.label} team wins`
      case 57: 
        return `The most probable score is ${prediction.name}`
      case 67 : 
        return `We expect ${prediction.label} ${prediction.name} ${prediction.market_description} in the game`
      case 74: 
        return `We expect the ${prediction.label === 1 ? "home" : "away"} team to have ${prediction.total} corners`
      case 80 : 
        return `We expect a total of ${prediction.label} ${prediction.name} goals from both teams in the match`
      case 90 : 
        return `The player most likely to score in the match is ${prediction.name}`
      case 247 : 
        return `We expect the ${prediction.label === 1 ? "home" : "away"} team to score first`
      case 255 : 
        return `We expect a total of ${prediction.label} ${prediction.name} cards from both teams in the match`
      case 281 : 
        return `We expect the ${prediction.label === 1 ? "home" : "away"} team to have ${prediction.total} cards`
      default:
        return `${prediction.label}`
    }
  }

  const getPredictionColor = (winning:any) => {
    // return winning === true && "text-blue-600"
  }

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-blue-700 text-center mt-3">Predictions</h3>

      { isLoading ?
          <div className="flex items-center justify-center">
            <Spinner/>
            <p className="ml-2 text-center text-gray-500 text-xl">Loading game predictions...</p>
          </div>
      : error ?
        <div className="flex items-center justify-center">
          <p className="text-center text-red-500 text-xl">{error}</p>
        </div>
      : gamePredictions &&
        <Accordion type="single" collapsible className="w-full">
          { gamePredictions.map((prediction:any) => (
            <AccordionItem value={prediction.market_id} key={prediction.market_id}>
              <AccordionTrigger className={`${getPredictionColor(prediction.winning)} hover:${getPredictionColor(prediction.winning)} font-semibold`}>{prediction.market_description}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 text-gray-700">
                  <p className="font-semibold">
                    {generatePredictionText(prediction)}
                  </p>
                  <p>Probability: </p>
                  <div className="flex justify-between items-center">
                    <span>{prediction.probability}%</span>
                    <div className="w-1/2 bg-gray-200 rounded-full h-2.5 mx-2">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${prediction.probability}%` }}></div>
                    </div>
                    <span>{((prediction.probability - 100) * -1).toFixed(2)}%</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      }
      
    </div>
  )
}
