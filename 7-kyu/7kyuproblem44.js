// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let first = age1 * age1
    let second = age2 * age2
    let third = age3 * age3
    let fourth = age4 * age4
    let fifth = age5 * age5
    let sixth = age6 * age6
    let seventh = age7 * age7
    let eighth = age8 * age8
    let total = first + second + third + fourth + fifth + sixth + seventh + eighth
    let result = Math.sqrt(total)/2
    return Math.floor(result)
  }