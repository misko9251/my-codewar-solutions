// Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).

function sumOfABeach(beach) {
    let result = 0
    let words = ["sand", "water", "fish", "sun"]
    beach = beach.toLowerCase()
    for(let i = 0; i < 4; i++){
      while(beach.includes(words[i])){
        beach = beach.replace(words[i], '')
        result++
      }
    }
    return result
  }
  // sumOfABeach("WAtErSlIde")  