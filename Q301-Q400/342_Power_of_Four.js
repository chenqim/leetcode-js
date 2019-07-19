/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  if (num === 1) return true
  if (num < 1) return false
  while (num % 4 === 0) {
    num /= 4
    if (num === 1) return true 
  }
  return false
};

console.log(isPowerOfFour(16))