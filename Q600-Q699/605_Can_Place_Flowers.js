/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if (n === 0) return true
    // 以种过花为标志，分隔出没种过花的地块，再对每一块地进行分析
    let arr = flowerbed.join('').split('1')
    let sum = 0
    if (arr.length === 1) {
        // 没种过花的情况
        sum += Math.ceil(arr[0].length / 2)
    } else {
        // 有种过花的情况
        for (let i = 0; i < arr.length; i++) {
            const len = arr[i].length
            if (i === 0 || i === arr.length - 1) {
                // 首尾可种数量
                if (len > 1) sum += Math.floor(len / 2)
            } else {
                // 中间可种数量
                if (len > 2) sum += Math.ceil(len / 2 - 1)
            }
        }
    }
    return sum >= n
};

console.log(canPlaceFlowers([1,0,0,0,1], 1))