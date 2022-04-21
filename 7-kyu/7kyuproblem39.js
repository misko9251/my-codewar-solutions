// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

function removeDuplicateWords (s) {
    let arr = s.split(' ')
    return arr.filter((item, index)=> arr.indexOf(item) === index).join(' ')
  }
  
  removeDuplicateWords('alpha beta beta gamma gamma')