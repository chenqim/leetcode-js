/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
    let i = 0
    let j = 0
    const set = new Set()
    let sum = 2
    while (sum <= bound) {
        while (sum <= bound) {
            set.add(sum)
            j++
            sum = Math.pow(x, i) + Math.pow(y, j)
            // y 为 1 的情况下要跳出循环，否则死循环，下同
            if (y === 1) break
        }
        i++
        j = 0
        sum = Math.pow(x, i) + Math.pow(y, j)
        if (x === 1) break
    }
    return Array.from(set)
};

console.log(powerfulIntegers(2, 1, 10))