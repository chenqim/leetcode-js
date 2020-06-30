/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let max = -1
    for (let i = 1; i < s.length; i++) {
        let count0 = 0
        let count1 = 0
        for (let j = 0; j < i; j++) {
            if (s[j] === '0') count0++
        }
        for (let j = i; j < s.length; j++) {
            if (s[j] === '1') count1++
        }
        if (count0 + count1 > max) max = count0 + count1
    }
    return max
};

console.log(maxScore('011101'))