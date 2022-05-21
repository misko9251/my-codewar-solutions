// Modify the kebabize function so that it converts a camel case string into a kebab case.

function kebabize(str) {
    let arr = str.split('').filter((item)=>{
      if(item !== '0' && item !== '1' && item !== '2' && item !== '3' && item !== '4' && item !== '5' && item !== '6' && item !== '7' && item !== '8' && item !== '9'){
        return true
      }
    })
    for(let j = 0; j < arr.length; j++){
      if(arr[j] == arr[j].toUpperCase()){
        arr[j] = '-' + arr[j]
      }
    }
    arr = arr.join('').split('')
    if(arr[0] == '-'){
      arr.shift()
    }
    return arr.join('').toLowerCase()
  }