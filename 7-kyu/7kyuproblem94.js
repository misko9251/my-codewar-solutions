// Write a function sum that accepts an unlimited number of integer arguments, and adds all of them together.

// The function should reject any arguments that are not integers, and sum the remaining integers.

function sum(){
    return [...arguments].filter((num)=> typeof num == 'number' && num % 1 === 0).reduce((a,b)=>a+b)
  
  }