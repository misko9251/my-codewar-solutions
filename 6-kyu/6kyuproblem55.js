// DESCRIPTION:
// You are given three integer inputs: length, minimum, and maximum.

// Return a string that:

// Starts at minimum
// Ascends one at a time until reaching the maximum, then
// Decends one at a time until reaching the minimum
// repeat until the string is the appropriate length

function ascendDescend(length, minimum, maximum) {
    let increasing = '';
    let decreasing = '';
    let answer = '';
    for(let i = minimum; i <= maximum; i++){
      increasing += i
    }
    for(let k = maximum-1; k > minimum; k--){
      decreasing += k
    }
    for(let j = 0; j <= length; j++){
      answer += increasing
      answer += decreasing
    }
    return answer.slice(0, length)
  }
  
  // start at minimum
  // add +1 until we get to maximum
  // then start removing one until we get back to the min
  // return only the length