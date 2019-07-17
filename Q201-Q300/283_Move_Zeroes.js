/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  debugger
  let index = 0
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
          // 遇到 0 就往后移
          nums.splice(i, 1)
          nums.push(0)
          i--
          index++
      }
      if (i + index === nums.length - 1) return nums
  }
};

console.log(moveZeroes([1, 0]))