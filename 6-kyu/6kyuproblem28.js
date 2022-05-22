// Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
    let arr = string.split('')
    for(let i = 0; i < arr.length-1; i++){
      if(arr[i] == arr[i].toLowerCase() && arr[i+1] == arr[i+1].toUpperCase()){
        arr[i+1] = ' ' + arr[i+1]
      }
    }
    return arr.join('')
  }
  
  solution('camelCasingTest')
  