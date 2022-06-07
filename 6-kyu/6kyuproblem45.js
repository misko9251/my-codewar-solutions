// DESCRIPTION:
// Find the sum of the digits of all the numbers from 1 to N (both ends included).

function twistedSum(n) {
    let arr = []
    for(let i = 1; i <= n; i++){
      arr.push(i)
    }
    return arr.join('').split('').map((item)=>+item).reduce((a,b)=>a+b)
  }