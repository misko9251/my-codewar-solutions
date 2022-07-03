// DESCRIPTION:
// You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return either:

// true if all developers in the list code in the same language; or
// false otherwise.

function isSameLanguage(list) {
  for(let i = 1; i < list.length; i++){
    if(list[i].language !== list[0].language){
      return false
    }
  }
  return true
}