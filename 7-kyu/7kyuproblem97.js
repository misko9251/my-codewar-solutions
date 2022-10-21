// DESCRIPTION:
// Given a varying number of integer arguments, return the digits that are not present in any of them.

function unusedDigits() {
    let arr = [...arguments]
    let numArr = arr.join('').split('').map((num)=>+num)
    let answer = []
    for(let i = 0; i <= 9; i++){
      if(!numArr.includes(i)){
        answer.push(i)
      }
    }
    return answer.join('')
  }