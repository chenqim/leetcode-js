/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let e = 0
    let o = 1
    let B = []
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            B[e] = A[i]
            e += 2
        } else {
            B[o] = A[i]
            o += 2
        }
    }
    return B
};

console.log(sortArrayByParityII([4, 2, 5, 7]))