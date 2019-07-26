/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let maxCount1 = 0
  let maxCount2 = 0
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 1) {
          maxCount2++
      } else {
          maxCount1 = Math.max(maxCount1, maxCount2)
          maxCount2 = 0
      }
  }
  return Math.max(maxCount1, maxCount2)
};

console.log(findMaxConsecutiveOnes([1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1]))