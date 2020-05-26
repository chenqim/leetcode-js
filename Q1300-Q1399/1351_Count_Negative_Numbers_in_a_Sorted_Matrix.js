/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let c = 0
    for (let g of grid) {
        for (let _g of g) {
            if (_g < 0) c++
        }
    }
    return c
};

console.log(countNegatives([[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]))