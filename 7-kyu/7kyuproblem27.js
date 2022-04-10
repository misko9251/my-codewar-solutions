// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

var capitals = function (word) {
    let capArray = []
    word.split('').filter((item, index)=>{
      if(item === item.toUpperCase())
        capArray.push(index)
    })
    return capArray
  };