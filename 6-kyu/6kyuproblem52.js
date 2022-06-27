// DESCRIPTION:
// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

function solve(s) {
    s = s.toLowerCase()
    let vowels = 'aeiou'.split('')
    let alph = ' abcdefghijklmnopqrstuvwxyz'
    let arr = s.split('') // ['z', 'o', 'd', 'i', 'a', 'c']
    for(let i = 0; i < arr.length; i++){
      if(vowels.indexOf(arr[i]) !== -1){
        arr[i] = ' '
      }
    }
    let filtered = arr.join('').split(' ').filter((item)=> item.length > 0).map((item)=>item.split('').map((item)=>item.charCodeAt()-96).reduce((a,b)=>a+b))
    return Math.max(...filtered)
  };
  
  solve("zodiacs")