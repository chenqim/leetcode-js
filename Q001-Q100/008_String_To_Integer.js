/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let result = 0
  let s = str.replace(/^\s*/, '')
  if (s === '') {
      result = 0
  } else {
      if (isNaN(parseInt(s))) {
          result = 0
      } else {
          result = parseInt(s)
          if (result > Math.pow(2, 31) - 1) {
              result = Math.pow(2, 31) -1
          }
          if (result < Math.pow(-2, 31)) {
              result = Math.pow(-2, 31)
          }
      }
  }
  return result
};

console.log(myAtoi("4193 with words"))