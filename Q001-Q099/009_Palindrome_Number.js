
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let flag = false
  let num = x
  let remainder = 0
  let result = 0
  if (x >= 0) {
      while (num !== 0) {
          remainder = num % 10
          num = Math.floor(num / 10)
          result = result * 10 + remainder
      }
      if (result === x) flag = true
  }
  return flag
};

console.log(isPalindrome(121))