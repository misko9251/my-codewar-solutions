// Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

// If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

function balance(left,right){
    let total1 = 0
    let total2 = 0
    for(let i = 0; i < left.length; i++){
      if(left[i] == '!'){
        total1+=2
      }else if(left[i] == '?'){
        total1+=3
      }
    }
    for(let j = 0; j < right.length; j++){
      if(right[j] == '!'){
        total2+=2
      }else if(right[j] == '?'){
        total2+=3
      }
    }
    if(total1>total2){
      return "Left"
    }else if(total1<total2){
      return "Right"
    }else{
      return "Balance"
    }
  }