/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    const len = arr.length * 0.25
    let temp = arr[0], count = 1
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === temp) {
            count++
        } else {
            temp = arr[i]
            count = 1
        }
        if (count > len) return arr[i]
    }
    return temp
};

console.log(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10]))