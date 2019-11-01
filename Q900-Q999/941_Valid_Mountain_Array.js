/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    const max = Math.max(...A)
    let index = A.indexOf(max)
    // 在首尾直接返回 false
    if (index === 0 || index === A.length - 1) return false
    // 峰值左右有相等的返回 false
    if (A[index - 1] === max || A[index + 1] === max) return false
    for (let i = 0; i < A.length; i++) {
        if (i < index) if (A[i] >= A[i + 1]) return false
        if (i > index) if (A[i] <= A[i + 1]) return false
    }
    return true
};

console.log(validMountainArray([1, 2, 4, 6, 4, 1]))