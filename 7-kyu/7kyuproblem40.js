// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

function minValue(values){
    let sortedArr = values.sort((a,b) => a - b)
    return Number(sortedArr.filter((item, index) => sortedArr.indexOf(item) == index).join(''))
  }
  
  minValue([4, 7, 5, 7])