// Implement a function which filters out array values which satisfy the given predicate.

function reject(array, predicate) {
    return array.filter((num)=> !predicate(num))
   }