// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

// [4, 3, 2, 5] would return [4, 3, 2, 6]

function upArray(arr){
    if(arr.length == 0) return null
    for(let i = 0; i < arr.length; i++){
      if(arr[i] < 0 || arr[i].toString().length > 1 || arr.length < 1){
        return null
      }
    }
    if(arr[arr.length-1] !== 9){
      let myNum = arr.pop()
      myNum++
      arr.push(myNum)
      return arr
    }if(arr.length < 11){ 
      let hey = +arr.join('') + 1
      return hey.toString().split('').map((num)=>+num)
    }if(arr[arr.length-1] == 9 && arr[arr.length-2] == 9){ 
      let myNum = arr.pop() 
      let myNum2 = arr.pop() 
      let myNum3 = arr.pop() 
      myNum = 0
      myNum2 = 0
      myNum3++
      arr.push(myNum)
      arr.push(myNum2)
      arr.push(myNum3)
      return arr
      }if(arr[arr.length-1] == 9){
      let myNum = arr.pop()
      let myNum2 = arr.pop()
      myNum = 0
      myNum2++
      arr.push(myNum2)
      arr.push(myNum)
        return arr
    }
  }
  
  upArray([9,9,9])