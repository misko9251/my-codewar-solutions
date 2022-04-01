// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// function problem(x){
//   if (typeof x == 'string')
//     return 'Error'
//   if (typeof x == 'number')
//     return x * 50 + 6
// }
// problem("hello")

function problem(x){
    return typeof x == 'string' ? 'Error' : x * 50 + 6
   }