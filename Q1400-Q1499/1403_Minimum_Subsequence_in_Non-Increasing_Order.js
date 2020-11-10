/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    let sum = nums.reduce((a, b) => a + b)
    nums.sort((a, b) => b - a)
    let temp = 0
    for (let i = 0; i < nums.length; i++) {
        temp += nums[i]
        if (temp > sum - temp) {
            return nums.slice(0, i + 1)
        }
    }
};

console.log(minSubsequence([4, 3, 10, 9, 8]))