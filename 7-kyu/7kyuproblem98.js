// DESCRIPTION:
// Each floating-point number should be formatted that only the first two decimal places are returned. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

// Don't round the numbers! Just cut them after two decimal places!

function twoDecimalPlaces(number) {
    let num = number.toString()
    return +num.slice(0,(num.indexOf('.'))+3)
  }