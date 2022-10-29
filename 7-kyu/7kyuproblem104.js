// DESCRIPTION:
// Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.

// Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.

function getIssuer(number) {
    let numArr = number.toString().split('').map((num)=>+num)
    if(numArr[0] == 4 && numArr.length == 13) return 'VISA'
    if(numArr[0] == 4 && numArr.length == 16) return 'VISA'
    if(numArr[0] == 5 && numArr[1] == 1 && numArr.length == 16) return 'Mastercard'
    if(numArr[0] == 5 && numArr[1] == 2 && numArr.length == 16) return 'Mastercard'
    if(numArr[0] == 5 && numArr[1] == 3 && numArr.length == 16) return 'Mastercard'
    if(numArr[0] == 5 && numArr[1] == 4 && numArr.length == 16) return 'Mastercard'
    if(numArr[0] == 5 && numArr[1] == 5 && numArr.length == 16) return 'Mastercard'
    if(numArr[0] == 6 && numArr[1] == 0 && numArr[2] == 1 && numArr[3] == 1 && numArr.length == 16) return 'Discover'
    if(numArr[0] == 3 && numArr.length == 15) return 'AMEX'
    else return 'Unknown'
  }