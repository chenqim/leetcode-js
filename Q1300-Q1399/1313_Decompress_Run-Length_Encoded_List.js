/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let arr = []
    for (let i = 0; i < nums.length; i += 2) {
        let temp = new Array(nums[i]).fill(nums[i + 1])
        arr.push(...temp)
        // arr = arr.concat(temp)
    }
    return arr
};

console.log(decompressRLElist([1, 2, 3, 4]))