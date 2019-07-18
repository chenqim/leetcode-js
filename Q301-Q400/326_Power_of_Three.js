/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (n === 1) return true
  if (n < 1) return false
  while (n % 3 === 0) {
      n /= 3
      if (n === 1) return true 
  }
  return false
};

console.log(isPowerOfThree(27))