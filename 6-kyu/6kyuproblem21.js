// Write a function

// tripledouble(num1,num2)
// which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

// If this isn't the case, return 0

function tripledouble(num1, num2) {
    if(num1 == num2) return 0
    num1 = num1.toString()
    num2 = num2.toString()
    let answer1 = []  // ['3', '7', '4']
    let answer2 = [] // ['8', '7', '4']
    for(let i = 0; i < num1.length; i++){
      if(num1[i] == num1[i+1] && num1[i+1] == num1[i+2]){
        answer1.push(num1[i])
      }
    }
    for(let j = 0; j < num2.length; j++){
      if(num2[j] == num2[j+1]){
        answer2.push(num2[j])
      }
    } 
    let equals = answer1.map((item)=>answer2.includes(item))
    if(equals.includes(true)){
      return 1
    }else{
      return 0
    }
  }
  
  tripledouble(451999277,41177722899)