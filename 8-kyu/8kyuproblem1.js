/* Can you find the needle in the haystack?
Write a function findNeedle() that takes an array full of junk but containing one "needle"
After your function finds the needle it should return a message (as a string) that says:
"found the needle at position " plus the index it found the needle, so:
should return "found the needle at position 5" (in COBOL "found the needle at position 6") */

function findNeedle(haystack) {
    let myNum = haystack.findIndex((name) => name == 'needle')
    return `found the needle at position ${myNum}`
  }
  
  findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])