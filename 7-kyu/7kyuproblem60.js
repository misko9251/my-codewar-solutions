// Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

// Task
// Given a number, Find if it is Disarium or not .



function disariumNumber(n){
    return n.toString().split('').map((item, index)=> Math.pow(item,index+1)).reduce((a,b)=>a+b) == n ? "Disarium !!" : "Not !!"
  }
  