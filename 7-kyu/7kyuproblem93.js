// DESCRIPTION:
// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

// Note: the input will not be empty.

function calculate(str) {
  let math = str.split('plus').join('+').split('minus').join('-')
  return eval(math).toString()
}