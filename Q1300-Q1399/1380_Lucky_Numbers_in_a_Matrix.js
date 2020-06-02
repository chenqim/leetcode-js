/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    const arr = []
    for (let i = 0; i < matrix.length; i++) {
        let min = Math.min(...matrix[i])
        let index = matrix[i].indexOf(min)
        // 是否是当前列最大的标志
        let flag = true
        for (let j = 0; j < matrix.length; j++) {
            // 有一个比他大的话就 false
            if (matrix[j][index] > min) {
                flag = false
                break
            }
        }
        if (flag) arr.push(min)
    }
    return arr
};

console.log(luckyNumbers([[3, 7, 8], [9, 11, 13], [15, 16, 17]]))