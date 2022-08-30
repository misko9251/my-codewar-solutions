// DESCRIPTION:
// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// Note: there are no special characters used, only letters and spaces

// No regex

function decipherThis(str) {
  let myArr = str.split(' ')
  let answers = []
  for(let i = 0; i < myArr.length; i++){
    if(+myArr[i].slice(0,3) > 0){
      let word = String.fromCharCode(myArr[i].slice(0,3)) + myArr[i].slice(3)
      let newWord = word.split('')
      newWord[1] = word[word.length-1]
      newWord[newWord.length-1] = word[1]
      myArr[i] = newWord.join('')
    }else if(+myArr[i].slice(0,2) > 0){
      let word = String.fromCharCode(myArr[i].slice(0,2)) + myArr[i].slice(2)
      let newWord = word.split('')
      newWord[1] = word[word.length-1]
      newWord[newWord.length-1] = word[1]
      myArr[i] = newWord.join('')
    }else if(+myArr[i].slice(0,1) > 0){
      let word = String.fromCharCode(myArr[i].slice(0,1)) + myArr[i].slice(1)
      let newWord = word.split('')
      newWord[1] = word[word.length-1]
      newWord[newWord.length-1] = word[1]
      myArr[i] = newWord.join('')
    }
  }
  return myArr.join(' ')
}; 
decipherThis('72olle 103doo 100ya')