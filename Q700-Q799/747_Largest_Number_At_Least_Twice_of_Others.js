/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    if (nums.length === 1) return 0
    let arr = nums.concat()
    arr.sort((a, b) => b - a)
    // 存在最大数则找到那个数的下标
    if (arr[0] >= arr[1] * 2) {
        for (let i = 0; i < nums.length; i++) {
            if (arr[0] === nums[i]) return i
        }
    }
    return -1
};

console.log(dominantIndex([3, 6, 1, 0]))