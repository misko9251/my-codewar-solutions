// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.


function cleanString(s) {
    s = s.split('') // ['a', 'b', 'c', '#', 'd', '#', '#', 'c']
    for(let i = 0; i < s.length; i++){
      if(s[i] === '#'){
        s[i] = ''
        s[i-1] = ''
  //   ['a', 'b', '', '', 'd', '#', '#', 'c']  <-- first itr fires idx 3
        s=s.filter((item)=>item!=='')
  //   ['a', 'b', 'd', '#', '#', 'c']  <-- the next itr will remove both #s, which we dont want
  //                                       so we have to reset i to equal a little less so it reruns
        i-=2
      }
    }
    return s.join('')
  }
  
  
  //Refactored 
  function cleanString(s) {
    let result = [];
    s.split('').map((item)=> item === '#' ? result.pop() : result.push(item))
    return result.join('')
  }
  
  
  cleanString('abc#d##c')