// In this kata, you've to count lowercase letters in a given string and return the letter count in a hash with 'letter' as key and count as 'value'. The key must be 'symbol' instead of string in Ruby and 'char' instead of string in Crystal.

function letterCount(s){
  s = s.split('')
  let myObj = {}
  for(let letter of s){
    if(myObj[letter]){
      myObj[letter]++
    }else{
      myObj[letter] = 1
    }
  }
  return myObj
}

letterCount("cccodewars")