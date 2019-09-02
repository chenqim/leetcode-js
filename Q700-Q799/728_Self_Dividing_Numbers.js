/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let result = []
    for (let i = left; i <= right; i++) {
        let arr = i.toString().split('')
        let flag = true
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === 0) {
                flag = false
                break
            } else if (i % Number(arr[j]) === 0) {
                continue
            } else {
                flag = false
                break
            }
        }
        if (flag) result.push(i)
    }
    return result
};

console.log(selfDividingNumbers(1, 22))