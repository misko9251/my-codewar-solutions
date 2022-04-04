// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

const binaryArrayToNumber = arr => {
    let newArr = arr.join('')
    return parseInt(newArr, 2)
  };