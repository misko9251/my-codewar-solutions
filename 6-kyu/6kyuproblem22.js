// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

function encode(string) {
    let word = string.split('')
    for(let i = 0; i < word.length; i++){
      if(word[i] === 'a'){
        word.splice(i, 1, '1')
      }if(word[i] == 'e'){
        word.splice(i, 1, '2')
      }if(word[i] == 'i'){
        word.splice(i, 1, '3')
      }if(word[i] == 'o'){
        word.splice(i, 1, '4')
      }if(word[i] == 'u'){
        word.splice(i, 1, '5')
      }
    }
    return word.join('')
  }
  
  function decode(string) {
    let word2 = string.split('')
    for(let i = 0; i < word2.length; i++){
      if(word2[i] === '1'){
        word2.splice(i, 1, 'a')
      }if(word2[i] == '2'){
        word2.splice(i, 1, 'e')
      }if(word2[i] == '3'){
        word2.splice(i, 1, 'i')
      }if(word2[i] == '4'){
        word2.splice(i, 1, 'o')
      }if(word2[i] == '5'){
        word2.splice(i, 1, 'u')
      }
    }
    return word2.join('')
  }