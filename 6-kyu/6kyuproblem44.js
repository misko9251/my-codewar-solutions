// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

// Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.



function numberOfPairs(gloves){
    let count = {} // {red: 2, green: 1, blue: 2}
    for(const color of gloves){
      if(count[color]){
        count[color]++
      }else{
        count[color] = 1
      }
    }
    let answer = 0
    Object.values(count).forEach((item)=>{
      answer += Math.floor(item/2)
    })
    return answer
  }
  