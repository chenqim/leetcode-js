/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let res = 0
    for (let a1 of arr1) {
        let flag = true
        for (let a2 of arr2) {
            if (Math.abs(a1 - a2) <= d) {
                flag = false
                break
            }
        }
        if (flag) res++
    }
    return res
};

console.log(findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2))