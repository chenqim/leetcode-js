/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            let temp = map.get(arr[i])
            temp++
            map.set(arr[i], temp)
        } else {
            map.set(arr[i], 1)
        }
    }
    let set =  new Set(map.values())
    return set.size === map.size
};

console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]))