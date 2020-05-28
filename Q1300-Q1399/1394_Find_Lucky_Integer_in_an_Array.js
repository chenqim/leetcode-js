/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const map = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            let temp = map.get(arr[i])
            temp++
            map.set(arr[i], temp)
        } else {
            map.set(arr[i], 1)
        }
    }
    let res = -1
    for (let [key, value] of map) {
        if (key === value) res = Math.max(key, res)
    }
    return res
};

console.log(findLucky([2, 2, 3, 4]))