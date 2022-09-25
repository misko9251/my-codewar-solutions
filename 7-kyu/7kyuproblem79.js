// Write a function that returns only the decimal part of the given number.

// You only have to handle valid numbers, not Infinity, NaN, or similar. Always return a positive decimal part.



function getDecimal(n){
    let index = n.toString().indexOf('.')
    let arr = n.toString().split('')
    return +arr.slice(index).join('')
  }
  
  getDecimal(2.4)