// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

function rowWeights(array){
    let firstNum = 0;
    let secondNum = 0;
    array.forEach((num, index) =>{
      if (index % 2 === 0){
        firstNum += num
      }else if(index % 2 !== 0){
        secondNum += num
      }
    })
    
    return [firstNum, secondNum]
  }
  
  rowWeights([50,60,70,80])
