/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let count = 0
  for (let i = 2; i < n; i++) {
      let flag = false
      for (let j = 2; j <= Math.sqrt(i); j++) {
          if (i % j === 0) {
              flag = true
              break
          }
      }
      if (!flag) {
          count ++
      }
  }
  return count
};

console.log(countPrimes(10))