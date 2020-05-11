/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    let a = -1
    let b = -1
    for (let i = 1; i < n; i++) {
        a = i
        b = n - i
        if (String(b).includes('0') || String(a).includes('0')) {
            continue
        } else {
            break
        }
    }
    return [a, b]
};

console.log(getNoZeroIntegers(1010))