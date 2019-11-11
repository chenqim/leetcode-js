/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
    A.sort((a, b) => b - a)
    // 因为已经经过排序，所以 a >= b >= c >= d，假设 abd 为最大周长，由三角形的满足条件可得 b + d > a，而 c >= d，所以 b + c >= b + d > a，也成立。
    for (let i = 0; i < A.length - 2; i++) {
        if (A[i] < A[i + 1] + A[i + 2]) return A[i] + A[i + 1] + A[i + 2]
    }
    return 0
};

console.log(largestPerimeter([3, 6, 2, 3]))