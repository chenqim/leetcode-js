/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0
    let high = nums.length - 1
    while (low <= high) {
        let middle = Math.floor((low + high) / 2)
        if (target < nums[middle])
            high = middle - 1
        else if (target > nums[middle])
            low = middle + 1
        else
            return middle
    }
    return -1
};

console.log(search([-1,0,3,5,9,12], 2))