// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.

var encryptThis = function(text) {
    let arr = text.split(' ') // ['hello', 'world']
    let a = arr.map((item)=>item.split(''))
    for(let i = 0; i < a.length; i++){
      [a[i][1], a[i][a[i].length-1]] = [a[i][a[i].length-1], a[i][1]]
      a[i][0] = a[i][0].charCodeAt(0).toString()
    }
    let answer =[] 
    a.forEach((item)=>answer.push(item.join('')))
    return answer.join(' ')
  }