/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num === 0 || num === 1) return true
  let result = 0
  while (result * result <= num) {
      if (num === result * result) return true
      result++
  }
  return false
};

console.log(isPerfectSquare(16))