// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

function capitalize(s){
    let newWord1 = [];
    let newWord2 = [];
    s.split('').forEach((item, index)=>{
      if (index % 2 === 0){
        newWord1.push(item.toUpperCase())
      }else{
        newWord1.push(item.toLowerCase())
      }
    })
    s.split('').forEach((item2, index2)=>{
      if(index2 % 2 === 0){
        newWord2.push(item2.toLowerCase())
      }else{
        newWord2.push(item2.toUpperCase())
      }
    })
    return `${newWord1.join('')} ${newWord2.join('')}`.split(' ')
  };