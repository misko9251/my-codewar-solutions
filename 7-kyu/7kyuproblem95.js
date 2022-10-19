// DESCRIPTION:
// Write a function named numbers.

// function should return True if all parameters are of the Number type.

// The function should accept any number of parameters.

function numbers(){
    let arr = [...arguments]
    let values = arr.map((item)=> typeof item == 'number')
    return values.includes(false) ? false : true
  }