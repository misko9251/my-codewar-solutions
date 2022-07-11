// DESCRIPTION:
// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

function divisors(integer) {
    let answer = []
    for(let i = 2; i <= integer-1; i++){
      if(integer % i == 0){
        answer.push(i)
      }
    }return answer.length == 0 ? `${integer} is prime` : answer
  };
  