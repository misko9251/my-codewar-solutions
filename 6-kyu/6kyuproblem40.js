// Welcome young Jedi! In this Kata you must create a function that takes an amount of US currency in cents, and returns a dictionary/hash which shows the least amount of coins used to make up that amount. The only coin denominations considered in this exercise are: Pennies (1¢), Nickels (5¢), Dimes (10¢) and Quarters (25¢). Therefor the dictionary returned should contain exactly 4 key/value pairs.

// Notes:

// If the function is passed either 0 or a negative number, the function should return the dictionary with all values equal to 0.
// If a float is passed into the function, its value should be rounded down, and the resulting dictionary should never contain fractions of a coin.

function looseChange(cents){
    if(cents <= 0) return {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}
    let change = {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}
    let total = Math.floor(cents) // 101
    
    //Quarters Loop
    while(total/25 >= 1){
      let quarters = Math.floor(total / 25)
      change.Quarters = quarters
      total -= (25*quarters)
    }
    //Dimes Loop
    while(total/10 >= 1){
      let dimes = Math.floor(total / 10)
      change.Dimes = dimes
      total -= (10*dimes)
    }
    //Nickels Loop
    while(total/5 >= 1){
      let nickels = Math.floor(total / 5)
      change.Nickels = nickels
      total -= (5*nickels)
    }
    //Pennies Loop
    while(total !== 0){
      let pennies = Math.floor(total / 1)
      change.Pennies = pennies
      total -= (1*pennies)
    }
    return change
  }
  
  looseChange(117)