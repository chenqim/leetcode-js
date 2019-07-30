/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  return nums.reduce((a, b) => a ^ b)
};

console.log(singleNumber([1, 2, 3, 3, 4, 1, 2]))