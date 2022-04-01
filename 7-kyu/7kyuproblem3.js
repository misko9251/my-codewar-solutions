/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an 
isogram. Assume the empty string is an isogram. Ignore letter case. */

function isIsogram(str){
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++)
      for(let j = i + 1; j < str.length; j++)
        if (str[i] === str[j])
          return false
    return true
  }
  
  // isIsogram("Dermatoglyphics") <--- Assuming we pass this.
  // If we have a for loop nested inside another for loop, the first pass of the
  // outer loop will trigger the inner loop, and the innter loop will then run 
  // until completion before returning back to the outer loop for the next iteration.
  // line 5 is basically stating if i, currently index zero, which is d, equals e, 
  // which is at index one (because j = i + 1) return false. However, these letters
  // do not equal. So it runs again and asks if d equal r. This is not true, so it
  // continues to run. Once completed, it goes back to the outer loop and i is now index
  // 1. So back to the inner loop we go. It will first check to see if e equals r. It doesnt,
  // so it continues to run. Eventually the loops will finish, and none of these letters
  // will equal eachother, so we return true.