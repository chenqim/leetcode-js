/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    let sumA = A.reduce((a, b) => a + b)
    let sumB = B.reduce((a, b) => a + b)
    let temp = (sumB - sumA) / 2
    // 用 set 速度会快很多，如果直接在数组中查找则会很慢
    let setB = new Set(B)
    for (let i = 0; i < A.length; i++) {
        let x = A[i]
        let y = x + temp
        if (setB.has(y)) return [x, y]
    }
    return -1
};

console.log(fairCandySwap([1, 1], [2, 2]))