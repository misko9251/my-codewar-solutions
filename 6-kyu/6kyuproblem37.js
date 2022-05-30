// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"

function stringTransformer(str) {
    let answer = []
    let arr = str.split('') // ['E', 'x', 'a', 'm', 'p', 'l', 'e', ' ', 's', 't', 'r', 'i', 'n', 'g']
    for(let i = 0; i < arr.length; i++){
      if(arr[i] == arr[i].toUpperCase() && arr[i] !== ' '){
        answer.push(arr[i].toLowerCase())
      }else{
        answer.push(arr[i].toUpperCase())
      }
    }
    return answer.join('').split(' ').reverse().join(' ')
  }