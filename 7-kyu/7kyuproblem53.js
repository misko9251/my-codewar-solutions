// An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.

// You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

// Return that number, or -1 if it is impossible.

function solve(n) {
    let total = 0;
    let current = n;
    if(n/500){
      total += Math.floor(n/500)
      n -= 500 * (Math.floor(n/500))
    }if(n/200){
      total += Math.floor(n/200)
      n -= 200 *  (Math.floor(n/200))
    }if(n/100){
      total += Math.floor(n/100)
      n -= 100 *  (Math.floor(n/100))
    }if(n/50){
      total += Math.floor(n/50)
      n -= 50 * Math.floor(n/50)
    }if(n/20){
      total += Math.floor(n/20)
      n -= 20 * Math.floor(n/20)
    }if(n/10){
      total += Math.floor(n/10)
      n -= 10 * Math.floor(n/10)
    }if(n > 0){
      return -1
    }
    return total
  }
  solve(770)