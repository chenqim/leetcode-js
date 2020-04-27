/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    // 比较斜率
    let rate = (coordinates[1][1] - coordinates[0][1]) / (coordinates[1][0] - coordinates[0][0])
    for (let i = 1; i < coordinates.length; i++) {
        let _rate = (coordinates[i][1] - coordinates[i - 1][1]) / (coordinates[i][0] - coordinates[i - 1][0])
        if (_rate !== rate) return false
    }
    return true
};

console.log([[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]])