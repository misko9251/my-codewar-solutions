// You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

// "zero nine five two" -> "four"

// If the string is empty or includes a number greater than 9, return "n/a"

function averageString(str) {
    let total = 0
    let arr = str.split(' ') // ['one', 'two', 'three', 'four', 'five']
    for(let i = 0; i < arr.length; i++){
      if(arr[i] == 'one'){
        total++
      }else if(arr[i] == 'two'){
        total+=2
      }else if(arr[i] == 'three'){          // six six k2vt six k2vt six
        total+=3
      }else if(arr[i] == 'four'){
        total+=4
      }else if(arr[i] == 'five'){
        total+=5
      }else if(arr[i] == 'six'){
        total+=6
      }else if(arr[i] == 'seven'){
        total+=7
      }else if(arr[i] == 'eight'){
        total+=8
      }else if(arr[i] == 'nine'){
        total+=9
      }else if(arr[i] == 'zero'){
        total+=0
      }else if(arr[i] !== 'one' || arr[i] !== 'two' || arr[i] !== 'three' || arr[i] !== 'four' || arr[i] !== 'five' || arr[i] !== 'six' || arr[i] !== 'seven' || arr[i] !== 'eight' || arr[i] !== 'nine'){
        return 'n/a'
      }
    }
    let answer = Math.floor(total/arr.length)
    if(answer == 1){
      return 'one'
    }if(answer == 2){
      return 'two'
    }if(answer == 3){
      return 'three'
    }if(answer == 4){
      return 'four'
    }if(answer == 5){
      return 'five'
    }if(answer == 6){
      return 'six'
    }if(answer == 7){
      return 'seven'
    }if(answer == 8){
      return 'eight'
    }if(answer == 9){
      return 'nine'
    }if(str == ''){
      return 'n/a'
    }if(answer == 0){
      return 'zero'
    }
  }