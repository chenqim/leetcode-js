/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  if (nums.length === 0) return 0
  let result = 1
  let temp = 1
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] > nums[i - 1])  {
          temp++
      } else {
          result = Math.max(temp, result)
          temp = 1
      }
  }
  return Math.max(temp, result)
};

console.log(findLengthOfLCIS([1, 3, 5, 4, 7]))