// Definition
// A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5

// Given a number determine if it special number or not .

function specialNumber(n){
    let ans = []
    let badNums = [6, 7, 8, 9]
    let arr = n.toString().split('').map((item)=>+item)
    for(let i = 0; i < badNums.length; i++){
      if(arr.includes(badNums[i]) == true){
        ans.push(1)
      }
    }
    return ans.length == 0 ? "Special!!" : "NOT!!"
  }