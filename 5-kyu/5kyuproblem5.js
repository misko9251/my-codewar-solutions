// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.



var maxSequence = function(arr){
    let numOfNegs = 0;
    for(let k = 0; k < arr.length; k++){
      if(arr[k] < 0){
        numOfNegs++
      }
    }
    let ans = []
    for(let i = 0; i < arr.length+1; i++){
      for(let j = 1; j < arr.length+1; j++){
        ans.push((arr.slice(i,j)))
      }
    }
    let arr2 = ans.filter((item, index, arr)=> item.length !== 0).map((item)=>item.reduce((a,b)=>a+b))
    return arr.length == 0 || numOfNegs == arr.length ? 0 : Math.max(...arr2)
  }