// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

function parse( data ){
    let total = 0;
    let answer = []
    for(let i = 0; i < data.length; i++){
      if(data[i] === 'i'){
        total++
      }if(data[i] === 'd'){
        total--
      }if(data[i] === 's'){
        total = total**2
      }if(data[i] === 'o'){
        answer.push(total)
      }
    }
    return answer
  }