// DESCRIPTION:
// Find the first character that repeats in a String and return that character.

// firstDup('tweet') => 't'
// firstDup('like') => undefined
// This is not the same as finding the character that repeats first. In that case, an input of 'tweet' would yield 'e'.

// Another example:

// In 'translator' you should return 't', not 'a'.

// v      v  
// translator
//   ^   ^
// While second 'a' appears before second 't', the first 't' is before the first 'a'.


function firstDup (s) {
    let arr = s.split('') // ['1', 'a', '2', 'b', '3', 'a', '3', 'c']
    let answer = []
    for(let i = 0; i < arr.length; i++){
      for(let j = i + 1; j < arr.length; j++){
        if(arr[i] == arr[j]){
          answer.push(arr[i])
        }
      }
    }
    return answer[0]
  }
  
  firstDup('1a2b3a3c')