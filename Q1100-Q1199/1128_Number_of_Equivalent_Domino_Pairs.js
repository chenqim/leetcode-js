/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    if (dominoes.length <= 1) return 0
    const map = new Map()
    for (let i = 0; i < dominoes.length; i++) {
        // ES6 数组元素互换
        if (dominoes[i][0] > dominoes[i][1]) [dominoes[i][0], dominoes[i][1]] = [dominoes[i][1], dominoes[i][0]]
        let key = dominoes[i][0] + '' + dominoes[i][1]
        if (map.has(key)) {
            let count = map.get(key)
            count++
            map.set(key, count)
        } else {
            map.set(key, 1)
        }
    }
    let sum = 0
    for (let [key, value] of map) {
        sum += value * (value - 1) / 2
    }
    return sum
};

console.log(numEquivDominoPairs([[1, 2], [2, 1], [3, 4], [5, 6]]))