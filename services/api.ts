export async function fetchGames() {
  try {
    const response = await fetch("https://apostron.franciscomedinaag.workers.dev/apostron/fixtures");
    const games = await response.json();
    return games;
  } catch (err) {
    console.log("Error from API fetching fixtures: ", err);
  }
}

export async function fetchPredictions(gameId: number){
  try {
    const response = await fetch("https://apostron.franciscomedinaag.workers.dev/apostron/predictions?matchId=" + gameId);
    const predictions = await response.json();
    return predictions;
  } catch (err) {
    console.log("Error from API fetching predictions: ", err);
  }
}
