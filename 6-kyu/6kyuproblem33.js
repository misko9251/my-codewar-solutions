// You have to sort the inner content of every word of a string in descending order.

// The inner content is the content of a word without first and the last char.

function sortTheInnerContent(words){
    let arr = words.split(' ').map((item,index)=> item.split(''))
    let answer = []
    for(let i = 0; i < arr.length; i++){
      if(arr[i].length > 1){
        let first = arr[i].shift()
        let second = arr[i].pop()
        answer.push( first + arr[i].sort().reverse() + second )
      }else{
        answer.push(arr[i])
      }
    }
    return answer.join(' ').split('').filter((item)=> item != ',').join('')
  }