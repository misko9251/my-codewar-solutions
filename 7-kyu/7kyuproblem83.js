// DESCRIPTION:
// Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

function evenChars(string) {
    return string.length < 2 || string.length >= 100 ? 'invalid string' : string.split('').filter((item,index)=> index % 2 !== 0)
  }
  evenChars ("1234")