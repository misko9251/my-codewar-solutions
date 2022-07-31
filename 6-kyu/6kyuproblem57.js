// DESCRIPTION:
// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

function longestConsec(strarr, k) {
    if (strarr.length == 0 || k > strarr.length || k <= 0) return '';
     let longString = '';
     let loopString = ''
     for(let i = 0; i < strarr.length; i++){
       loopString = strarr.slice(i, i+k)
       if(loopString.join('').length > longString.length){
         longString = loopString.join('')
       }
     }
     return longString
   }