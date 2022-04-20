// There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(arr) {
    let newArr = arr.sort((a,b) => a - b)
    return (newArr[0] == newArr[1]) ? newArr[newArr.length-1] : newArr[0]
  }
  
  findUniq([ 3, 2, 3, 3, 3 ])