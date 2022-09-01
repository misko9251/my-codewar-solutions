// DESCRIPTION:
// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).


function SeriesSum(n){
    if(n == 1) return "1.00"
    if(n == 0) return "0.00"
      let answer = 1;
      let num = 4;
    for(let i = 1; i < n; i++){
      answer+= 1/num
      num+=3
    }
    return answer.toFixed(2)
  }
  
  SeriesSum(5)