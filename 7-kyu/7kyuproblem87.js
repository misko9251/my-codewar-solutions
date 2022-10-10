// In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.


function solve(str){
    let answer = [];
    let reversed = str.split(' ').reverse().forEach((item)=> answer.push(item.split('').reverse().join('')))
    let spaces = [] // 4, 6
   str.split('').forEach((item, index)=>{
     if(item == ' '){
       spaces.push(index)
     }
   })
   let insertArr = answer.join('').split('') // ['s', 'k', 'c', 'o', 'r', 'e', 'd', 'o', 'c', 'r', 'u', 'o', 'y']
   for(let i = 0; i < answer.length-1; i++){
     insertArr.splice(spaces[i], 0, ' ')
   }
   return insertArr.join('')
 }