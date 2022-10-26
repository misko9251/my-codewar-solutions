// DESCRIPTION:
// Task
// Write a function that accepts two arguments and generates a sequence containing the integers from the first argument to the second inclusive.

// Input
// Pair of integers greater than or equal to 0. The second argument will always be greater than or equal to the first.


function generateIntegers(m, n) {
    let answer = []
    for(let i = m; i <= n; i++){
      answer.push(i)
    }
    return answer
  }