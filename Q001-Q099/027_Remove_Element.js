/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === val) {
          nums.splice(i, 1)
          // 原数组长度减少 1，所以下标也要自减
          i--
      }
  }
  return nums.length
};

// 双指针法
var removeElement2 = function(nums, val) {
  let ans = 0
  for(const num of nums) {
      if(num !== val) {
          nums[ans] = num
          ans++
      }
  }
  return ans
};

let nums = [0,1,2,2,3,0,4,2]
console.log(removeElement2(nums, 2))
console.log(nums)