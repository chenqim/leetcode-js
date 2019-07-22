/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
  // 1-9 9
  // 10-99 90
  // 100-999 900
  // 1000-9999 9000
  // 找出 n 所在的位数范围
  let i = 9
  let j = 1
  let sum = 9
  while (sum < n) {
      i = i * 10
      j = j + 1
      sum = sum + i * j
  }
  // 找出 n 所在的那个数
  let k = 0
  let l = Math.pow(10, j - 1) - 1
  for (let m = sum - i * j + 1; ; m = m + j) {
      l++
      if (m === n) {
          k = m
          break
      }
      if (m > n) {
          k = m - j
          l--
          break
      }
  }
  // 截取
  return l.toString().substr(n - k, 1)
};

console.log(findNthDigit(191))