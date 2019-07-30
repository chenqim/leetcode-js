/**
 * @param {number} x
 * @return {number}
 */
// 暴力法
var mySqrt = function(x) {
  if (x === 0) return 0
  let index = 0
  while (1) {
      if (index * index > x) return index - 1
      index++
  }
};

// 牛顿法
var mySqrt2 = function(x) {
  if (x <= 1) return x
  let r = x
  while (r * r > x) {
      r = Math.floor((r + x / r) / 2)
  }
  return Math.floor(r)
};

console.log(mySqrt(7))
console.log(mySqrt2(7))