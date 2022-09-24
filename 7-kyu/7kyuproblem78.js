// Your job is to implement a function which returns the last D digits of an integer N as a list.

function lastDigit(n, d) {
    if (d <= 0) return []
    let arr = n.toString().split('')
    return arr.splice(-d).map((num)=>+num)
  }
  lastDigit(123767,4)