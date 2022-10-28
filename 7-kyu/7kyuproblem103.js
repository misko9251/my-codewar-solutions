// DESCRIPTION:
// Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. The files must be saved in the order they appear in the queue.

// Input:
// Array of file sizes (0 <= s <= 100)
// Capacity of the HD (0 <= c <= 500)
// Output:
// Number of files that can be fully saved in the HD.

function save(sizes, hd) {
    let i = 0;
    let count = 0;
    let score = 0;
    while(score <= hd){
      score += sizes[i]
      count++
      i++
    }
    return count-1
  }