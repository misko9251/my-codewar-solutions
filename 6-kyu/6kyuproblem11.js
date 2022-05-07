// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

function toCamelCase(str){
    if(str == '') return ''
    if(str.includes('_')){
      str = str.split('_')
    }if(str.includes('-')){
      str = str.split('-')
    }
    let arr = []
    for(let i = 0; i < str.length; i++){
      arr.push(str[i][0].toUpperCase() + str[i].substring(1))
    }
      if(str[0][0] == str[0][0].toUpperCase()){
      return arr.join('')
    }else if(str[0][0] !== str[0][0].toUpperCase()){
      arr.splice(0, 1, arr[0].toLowerCase())
      return arr.join('')
    }
  }