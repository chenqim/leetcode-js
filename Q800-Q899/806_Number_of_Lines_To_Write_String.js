/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
    let row = 1
    let max = 0
    for (let i = 0; i < S.length; i++) {
        max += widths[S.charCodeAt(i) - 97]
        if (max > 100) {
          max = widths[S.charCodeAt(i) - 97]
          row++
        }
    }
    return [row, max]
};

console.log(numberOfLines([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], "abcdefghijklmnopqrstuvwxyz"))