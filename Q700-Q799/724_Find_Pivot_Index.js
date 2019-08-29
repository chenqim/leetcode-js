/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let sum = 0
  let left = 0
  for (let n of nums) {
      sum += n
  }
  for (let i = 0; i < nums.length; i++) {
      if (2 * left + nums[i] === sum) return i
      left += nums[i]
  }
  return -1
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]))