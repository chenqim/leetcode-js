/**
 * @param {number[]} chips
 * @return {number}
 */
var minCostToMoveChips = function(chips) {
    let a = 0, b = 0
    for (let c of chips) {
        if (c % 2 === 1) b++
        else a++
    }
    return Math.min(a, b)
};

console.log(minCostToMoveChips([2, 2, 2, 3, 3]))