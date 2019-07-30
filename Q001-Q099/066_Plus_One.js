/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
      digits[i]++
      digits[i] = digits[i] % 10
      if (digits[i] !== 0) return digits
  }
  // 每一位都进位的话就在最前面加个 1
  let arr = []
  for (let i = 0; i < digits.length + 1; i++) {
      arr.push(0)
  }
  arr[0] = 1
  return arr
};

console.log(plusOne([9, 9, 9, 9, 9]))