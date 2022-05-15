// Write a function that accepts a string, and returns true if it is in the form of a phone number.
// Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

// Only worry about the following format:
// (123) 456-7890 (don't forget the space after the close parentheses)

function validPhoneNumber(phoneNumber){
    let num = phoneNumber.split('')
    if(num[0] == '(' && num[1] !== [0] && num[4] == ')' && num[9] == '-' && num[5] == ' ' && num.length == 14){
      return true
    }else{
      return false
    }
  }
  
  validPhoneNumber("(123) 456-7890")