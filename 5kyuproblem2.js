// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str){
    let newArr = str.split(' ').map((word)=>{
      return (word.slice(1) + word.slice(0,1) + 'ay') 
    })
     if(newArr.includes('!ay') || newArr.includes('?ay')){
        let punctuation = newArr[newArr.length-1].slice(0,1)
        newArr.pop()
       return newArr.concat(punctuation).join(' ')
     }else{
       return newArr.join(' ')
     }
  }
  pigIt('O tempora o mores ?')