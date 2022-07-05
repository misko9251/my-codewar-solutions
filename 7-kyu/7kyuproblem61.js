// Definition
// Jumping number is the number that All adjacent digits in it differ by 1.

// Task
// Given a number, Find if it is Jumping or not .

function jumpingNumber(n){
  let num = n.toString().split('')
  for(let i = 0; i < num.length-1; i++){
    if(Math.abs(num[i] - num[i+1]) !== 1){
      return 'Not!!'                
    }
  }
  return 'Jumping!!'
}
jumpingNumber(54)