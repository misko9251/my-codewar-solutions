// DESCRIPTION:
// Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.

function filterLongWords(sentence, n) {
    let answer = []
    sentence.split(' ').forEach((item)=>{
      if(item.length > n){
        answer.push(item)
      }
    })
    return answer
  }