// DESCRIPTION:
// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

function reverseNumber(n) {
    if(n>0){
      return +n.toString().split('').reverse().join('')
    }if(n<0){
      return Number('-' + n.toString().split('').filter((item)=> item !== '-').reverse().join(''))
    }else{
      return 0
    }
  }