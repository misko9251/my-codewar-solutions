// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

function mygcd(x,y){
    let myArr = []
    if (x > y){
      for(let i = 1; i <= x; i++){
        if(x % i === 0 && y % i === 0)
          myArr.push(i)
      }
    }
    if (y > x){
      for(let j = 1; j <= y; j++){
        if(x % j === 0 && y % j === 0)
          myArr.push(j)
      }
    }
    return Math.max(...myArr)
  }