// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s){
    s = s.split(' ').sort((a,b)=> a.length - b.length)
    return s[0].length
  }
  findShort("bitcoin take over the world maybe who knows perhaps")
  
  //split string into array of words
  //sort through array to find shortest word (length)