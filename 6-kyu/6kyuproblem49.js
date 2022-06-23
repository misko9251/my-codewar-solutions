// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word){
    let arr = word.toLowerCase().split('')
    let ans = ""
    for(let i = 0; i < arr.length; i++){
      let first = arr.indexOf(arr[i]);
      let second= arr.lastIndexOf(arr[i]);
      if(first === second){
        ans+= '('
      }else{
        ans+= ')'
      }
    }
    return ans
  }
  
  duplicateEncode("recede")