// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
    let zeros = arr.filter((num)=> num === 0)
    let everythingElse = arr.filter((num) => num !== 0)
    return everythingElse.concat(zeros)
  }
  moveZeros([1,2,0,1,0,1,0,3,0,1])