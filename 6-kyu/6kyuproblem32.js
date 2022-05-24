// The objective is to return all pairs of integers from a given array of integers that have a difference of 2.

// The result array should be sorted in ascending order of values.

// Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.

function twosDifference(input){
    let answer = []
    for(let i = 0; i < input.length; i++){
      for(let j = 0; j < input.length; j++){
        if(input[i] - input[j] == 2){
          answer.push([input[j], input[i]])
        }
      }
    }
     return answer.sort((a,b)=>a[0]-b[0])
   }
   
   twosDifference([ 4, 1, 2, 3 ])