/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let max = -Infinity
  let temp = 0
  for (let j = 0; j < k; j++) {
      temp += nums[j]
  }
  max = temp
  for (let i = 1; i < nums.length - k + 1; i++) {
      // 减去前一个
      temp -= nums[i - 1]
      // 机上新来的一个数
      temp += nums[i + k - 1]
      max = Math.max(max, temp)
  }
  return max / k
};

console.log(findMaxAverage([5], 1))