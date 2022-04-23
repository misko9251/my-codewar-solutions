// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
    let total = 0
    num = num.toString() // 
    while(num.length > 1){
      total++
      num = num.split('').map((item)=>+item).reduce((a,b)=>a*b).toString()
              //['3', '9']//      //[3, 9]//       3*9 =27, change back to string and run again  +1
      //'27'      ['2, '7']          //[2, 7]/     2*7 =14  change back to string and run again +1
      //'14'    ['1', '4']        [1, 4]           1*4 = 4  change back to string '4' ...+1... loop sees length is no longer greater than 1 and stops          
    }
    return total
  }
  
  persistence(39)