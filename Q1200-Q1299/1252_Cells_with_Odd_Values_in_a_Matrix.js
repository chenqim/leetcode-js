/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push(new Array(m).fill(0))
    }
    for (let i = 0; i < indices.length; i++) {
        // 行
        let h = indices[i][0]
        // 列
        let l = indices[i][1]
        // 行 +1
        arr[h] = arr[h].map(item => item + 1)
        // 列 +1
        for (let j = 0; j < arr.length; j++) {
            arr[j][l]++
        }
    }
    let count = 0
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] % 2 === 1) count++
        }
    }
    return count
};

console.log(oddCells(2, 3, [[0,1],[1,1]]))