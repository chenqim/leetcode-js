/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  // 利用高斯公式
  let sum1 = nums.length * (nums.length + 1) / 2
  let sum2 = 0
  for (let a of nums) sum2 += a
  return sum1 - sum2
};

var missingNumber2 = function(nums) {
  // 排序后对比
  let arr = nums.sort((a, b) => a - b)
  if (arr[0] !== 0) return 0
  if (arr[arr.length - 1] !== arr.length) return arr.length
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== i) return i
  }
  return -1
};

console.log(missingNumber([9,6,4,2,3,5,7,0,1]))