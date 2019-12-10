/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    // 按照 price_A - price_B 从小到大排序
    costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]))
    let total = 0
    const n = costs.length / 2
    // 前 N 个去 A，后 N 个去 B
    for (let i = 0; i < n; i++) {
        total += costs[i][0] + costs[i + n][1]
    }
    return total
};

console.log(twoCitySchedCost([[10, 20], [30, 200], [400, 50], [30, 20]]))