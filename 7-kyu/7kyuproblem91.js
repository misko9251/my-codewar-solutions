// DESCRIPTION:
// Complete the function that takes one argument, a list of words, and returns the length of the longest word in the list.



function longest(words) {
  let sorted = words.sort((a,b)=> b.length - a.length)
  return sorted[0].length
}
