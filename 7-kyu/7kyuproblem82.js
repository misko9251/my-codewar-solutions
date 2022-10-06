// DESCRIPTION:
// Bob is a lazy man.

// He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

// Example:

// "hel2!lo" --> 6

// "wicked .. !" --> 6

// "!?..A" --> 1

function countLettersAndDigits(input) {
    input = input.toLowerCase()
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let nums = "1234567890"
    let count = 0;
    for(let i = 0; i < input.length; i++){
      if(alphabet.indexOf(input[i]) !== -1){
        count++
      }if(nums.indexOf(input[i]) !== -1){
        count++
      }
    } return count
  }
  countLettersAndDigits("hel2!lo")