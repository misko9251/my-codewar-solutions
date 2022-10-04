// Create a function isDivisible(n,...) that checks if the first argument n is divisible by all other arguments (return true if no other arguments)



function isDivisible(){
    let arr = [...arguments]
    for(let i = 1; i < arr.length; i++){
      if(arr[0] % arr[i] !== 0){
        return false
      }
    }return true
  }
  
  isDivisible(12,3,4)