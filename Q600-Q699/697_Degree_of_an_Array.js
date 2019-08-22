/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let arr = map.get(nums[i])
            arr[0]++
            arr[2] = i
            map.set(nums[i], arr)
        } else {
            // [出现的次数, 第一次出现的位置, 最后一次出现的位置]
            map.set(nums[i], [1, i, i])
        }
    }
    let max = 0
    let values = []
    // 找出出现次数最多的（也就是数组的度）
    for (let m of map) {
        if (m[1][0] > max) {
            max = m[1][0]
            values = []
            values.push(m[1])
        } else if (m[1][0] === max) {
            values.push(m[1])
        }
    }
    // 找出最短连续子数组的长度
    let min = Infinity
    for (let v of values) {
        if (v[2] - v[1] + 1 < min) min = v[2] - v[1] + 1
    }
    return min
};

console.log(findShortestSubArray([1,2,2,3,1,4,2]))