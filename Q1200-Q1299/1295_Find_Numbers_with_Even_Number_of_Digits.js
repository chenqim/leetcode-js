/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0
    for (let n of nums) {
        if (String(n).length % 2 === 0) count++
    }
    return count
};

console.log(findNumbers([12, 345, 2, 6, 7896]))