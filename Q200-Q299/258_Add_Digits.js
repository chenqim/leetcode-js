/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  while (num > 9) {
      let sum = 0
      while (num !== 0) {
          let a = num % 10
          num = Math.floor(num / 10)
          sum += a
      }
      num = sum
  }
  return num
};

var addDigits2 = function(num) {
  if (num < 10) return num
  let result = num % 9
  return result === 0 ? 9 : result
};

console.log(addDigits(198))