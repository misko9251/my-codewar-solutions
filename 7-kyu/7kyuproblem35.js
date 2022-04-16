// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

function solve(s){
    let lowercase = 0
    let uppercase = 0
    s.split('').forEach((a)=>{
      if(a == a.toLowerCase()){
        lowercase+=1
      }
    })
    s.split('').forEach((b)=>{
      if(b === b.toUpperCase()){
        uppercase+=1
      }
    })
  if (uppercase > lowercase)
    return s.toUpperCase()
  if (lowercase > uppercase || lowercase == uppercase)
    return s.toLowerCase()
}

solve("CODe")