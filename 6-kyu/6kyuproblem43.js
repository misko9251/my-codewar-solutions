// Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string.

// Note:

// Empty string values should be ignored.
// Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.
// Example: (Input --> output)

function formatWords(words){
    if(words == null) return ''
    if (words.length == 0) return ''
    words = words.filter((item)=> item !== '')
    if (words.length == 2) return `${words[0]} and ${words[1]}`
    if (words.length == 1) return words[0]
    words.filter((item,index)=>{
      if(index !== words.length-1 && index !== words.length-2){
        words[index] = words[index] + ','
      }
    })
    if(words.length > 0){
      words.splice(words.length-1, 0, 'and')
    }
    return words.join(' ')
  }