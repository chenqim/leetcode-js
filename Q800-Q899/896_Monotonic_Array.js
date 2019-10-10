/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    let flag = ''
    if (A[A.length - 1] > A[0]) {
        flag = 'up'
    } else {
        flag = 'down'
    }
    if (flag === 'up') {
        for (let i = 1; i < A.length; i++) {
            if (A[i] < A[i - 1]) return false
        }
        return true
    } else {
        for (let i = 1; i < A.length; i++) {
            if (A[i] > A[i - 1]) return false
        }
        return true
    }
};

console.log(isMonotonic([2, 4, 5, 8]))