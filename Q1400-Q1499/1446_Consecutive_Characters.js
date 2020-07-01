/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let count = 1
    let max = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i + 1] === s[i]) {
            count++
        } else {
            if (count > max) max = count
            count = 1
        }
    }
    return max
};

console.log(maxPower('abbcccddddeeeeedcba'))