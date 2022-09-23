// Write a function that combines two arrays by alternatingly taking elements from each array in turn.

function mergeArrays(a, b) {
    let longerArr = Math.max(a.length, b.length)
    let answer = []
    for(let i = 0; i < longerArr; i++){
      answer.push(a[i])
      answer.push(b[i])
    }
    return answer.filter((item)=> item !== undefined)
  }