// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

function sumOfMinimums(arr) {
    return arr.reduce((acc, c) => acc + Math.min(...c), 0)
  }
  
  sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]])