// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

function getDivisorsCnt(n){
    let sum = 0;
    for (let i = 1; i <= n; i++){
      if (n % i === 0)
        sum += 1
    }
    return sum
  }