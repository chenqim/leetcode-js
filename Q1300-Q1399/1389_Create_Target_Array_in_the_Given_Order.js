/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    const res = []
    for (let i = 0; i < index.length; i++) {
        // let _index = index[i]
        // if (_index >= res.length) {
        //     res.push(nums[i])
        // } else {
        //     res.splice(_index, 0, nums[i])
        // }
        res.splice(index[i], 0, nums[i])
    }
    return res
};

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]))