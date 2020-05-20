/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            // 0 需要两个
            if (arr.indexOf(0) !== arr.lastIndexOf(0)) return true
        } else {
            if (arr.includes(arr[i] * 2)) return true
        }
    }
    return false
};

console.log(checkIfExist([10, 2, 5, 3]))