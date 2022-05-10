// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

var uniqueInOrder=function(iterable){
    if(typeof iterable === 'object'){
      return iterable.filter((item, index)=> item !== iterable[index+1])
    }else if(typeof iterable === 'string'){
      let arr = iterable.split('')
      return arr.filter((item2,index2)=> item2 !== iterable[index2+1])
    }  
  }