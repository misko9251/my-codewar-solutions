// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

function removeSmallest(numbers) {
    let arrCopy = numbers.slice() // We cannot mutate the original array, so we will make a copy of it using slice
    let smallestNum = arrCopy.indexOf(Math.min(...numbers)) // We have to find the index of the smallest number in our copied array
    arrCopy.splice(smallestNum, 1) // Then, we must remove the smallest number in that array using the index above
    return arrCopy // Once we remove the smallest number from our copied array, we can return that copied array which now omits the smallest number. We haven't mutated the original array, which the question asked.
  }
  
  removeSmallest([9, 9, 3, 4, 5])