// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Original Solution
// function XO(str) {
//   let exes = 0;
//   let ohs = 0;
//   let newNums = str.split('')
//   for (let i = 0; i < newNums.length; i++){
//     if (newNums[i] == 'x' || newNums[i] == 'X')
//       exes += 1
//     else if (newNums[i] == 'o' || newNums[i] == 'O')
//       ohs += 1
//   }
//   if (exes == ohs){
//     return true
//   }else{
//     return false
//   }
// }

// Refactored Code
function XO(str){
    str = str.toLowerCase().split('')
    let exes = str.filter((letter)=> letter == 'x').length
    let ohs = str.filter((letter2) => letter2 == 'o').length
    return exes === ohs ? true : false
  }
  
  
  
  // psuedo code:
  // loop through and count x's, store number in variable
  // loop through and count y's, store number in variable
  // compare variables, if same(=) return true
  // compare variables, if not same(!=) return false
  // return true if there are zero x's and o's
  // forEach((element) => element == 'x' || element == 'X')