// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// function removeUrlAnchor(url){
//   if (url.includes('#')){
//     let myArr = url.split('')
//     let sliceNum = myArr.indexOf('#')
//     return myArr.slice(0, sliceNum).join('')
//   }else{
//     return url
//   }
// }

function removeUrlAnchor(url){
    return url.split('#')[0];
  }