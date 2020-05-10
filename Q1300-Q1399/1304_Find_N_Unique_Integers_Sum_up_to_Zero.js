/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    const arr = []
    let sum = 0
    for (let i = 0; i < n - 1; i++) {
        arr.push(i)
        sum += i
    }
    arr.push(-sum)
    return arr
};

console.log(sumZero(5))