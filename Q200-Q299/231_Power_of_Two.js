/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  // 将参数转换为二进制
  let arr = n.toString(2).split('')
  let count = 0
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '1') {
          count++
          // 如果是 2 的幂次方，二进制中只会有 1 位为 1
          if (count > 1) return false
      }
  }
  // 小于等 0 的整数都不会是 2 的幂次方
  return n <= 0 ? false : count === 1 ? true : false
};

console.log(isPowerOfTwo(16))