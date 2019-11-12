/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    return A.map(e => Math.pow(e, 2)).sort((a, b) => a - b)
}

console.log(sortedSquares([-7, -3, 2, 3, 11]))