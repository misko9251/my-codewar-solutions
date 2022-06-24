// DESCRIPTION:
// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

function findMissingLetter(array){
    let alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let ans = "";
    let lowerCase = array.map((item)=>item.toLowerCase()) // ['a','b','c','d','f']
    let startingPoint = alph.indexOf(lowerCase[0]) // returns 0
    for(let i = 0; i < lowerCase.length; i++){
      if(lowerCase[i] !== alph[i+startingPoint]){
        return array[0] == array[0].toUpperCase() ? alph[i+startingPoint].toUpperCase() : alph[i+startingPoint].toLowerCase()
      }
    }
  }
  findMissingLetter(['a','b','c','d','f'])