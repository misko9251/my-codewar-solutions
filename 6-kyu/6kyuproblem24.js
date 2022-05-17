// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return an empty value.


function dashatize(num) {
    if(typeof num !== 'number') return "NaN"
    if(num == 0) return '0'
    let arr = num.toString().split('').filter((item)=> item != '-').map((num)=>+num) // [2, 8, 3, 6, 9]
    for(let i = 0; i < arr.length; i++){
      if(arr[i] % 2 !== 0){
        arr[i] = '-' + arr[i] + '-'
      }
    }
    let dashed = arr.join('').split('') // ['2', '8', '-', '3', '-', '6', '-', '9', '-']
    if(dashed[0] == '-'){
      dashed.shift()
    }if(dashed[dashed.length-1] == '-'){
      dashed.pop()
    }                                 // ['2', '8', '-', '3', '-', '6', '-', '9']
    for(let j = 0; j < dashed.length; j++){
      if(dashed[j] == '-' && dashed[j+1] == '-'){
        dashed.splice(j, 1)
      }
    }
    if(dashed.join('') == 'NaN-NaN-NaN'){
      return 'NaN'
    }else{
      return dashed.join('')
    }
  }