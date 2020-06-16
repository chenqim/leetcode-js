/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    let s = ''
    if (n % 2 === 0) {
        // for (let i = 0; i < n - 1; i++) {
        //     s += 'a'
        // }
        s += 'a'.repeat(n - 1)
        s += 'b'
    } else {
        // for (let i = 0; i < n; i++) {
        //     s += 'a'
        // }
        s += 'a'.repeat(n)
    }
    return s
};

console.log(generateTheString(5))