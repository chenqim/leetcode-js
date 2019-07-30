/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  if (num <= 1) return false
  let sum = 0
  let i = 1
  while (i <= Math.floor(Math.sqrt(num))) {
      if (num % i === 0) {
          // 加上 num 的因子
          sum += i
          // 加上 num 的另一个因子（排除自身）
          if (i !== 1) sum += num / i
          // 如果因子之和 sum 已经大于 num 了，直接返回 false
          if (sum - num > num) return false
      }
      i++
  }
  if (sum === num) return true
  return false
};

console.log(checkPerfectNumber(28))