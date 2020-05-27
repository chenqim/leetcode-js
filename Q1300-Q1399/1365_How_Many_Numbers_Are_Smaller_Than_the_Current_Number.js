/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let numsCopy = nums.concat()
    nums.sort((a, b) => a - b)
    let result = []
    for (let i = 0; i < numsCopy.length; i++) {
        result.push(nums.indexOf(numsCopy[i]))
    }
    return result
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]))