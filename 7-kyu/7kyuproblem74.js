// DESCRIPTION:
// A Nice array is defined to be an array where for every value n in the array, there is also an element n - 1 or n + 1 in the array.

function isNice(arr){
    if (arr.length===0) return false
    let newArr = arr.map((item)=> item+1).concat(arr.map((item)=>item-1)) // [3, 11, 10, 4, 1, 9, 8, 2]
    for(let i = 0; i < arr.length; i++){
      if(!newArr.includes(arr[i])){
        return false
      }
    }
    return true
  }