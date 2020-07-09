/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push(nums[i], nums[i + n])
    }
    return arr
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3))