/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    const arr = []
    let j = 0
    for (let i = 1; i <= n; i++) {
        if (j >= target.length) break
        if (target[j] === i) {
            arr.push('Push')
            j++
        } else {
            arr.push('Push', 'Pop')
        }
    }
    return arr
};

console.log(buildArray([2, 3, 4], 4))