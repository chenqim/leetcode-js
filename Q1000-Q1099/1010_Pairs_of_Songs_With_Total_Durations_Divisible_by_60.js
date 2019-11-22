/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    // 记录各个余数出现的次数
    let map = new Map()
    for (let t of time) {
        let m = t % 60
        if (map.has(m)) {
            let n = map.get(m)
            n++
            map.set(m, n)
        } else {
            map.set(m, 1)
        }
    }
    // 把 map 升序
    let arr = Array.from(map)
    arr.sort((a, b) => a[0] - b[0])
    map = new Map(arr)
    let n = 0
    for (let [key, value] of map) {
        if (key === 0) {
            // 0 只能跟自己组合（排列组合公式）
            n += map.get(0) * (map.get(0) - 1) / 2
        } else if (key > 0 && key < 30) {
            // 能找到相配对就计算配对的次数（key 相加为 60 的即为配对）
            if (map.get(60 - key)) n += value * map.get(60 - key)
        } else if (key === 30) {
            // 30 只能跟自己组合（排列组合公式）
            n += map.get(30) * (map.get(30) - 1) / 2
        } else {
            break
        }
    }
    return n
};

// var numPairsDivisibleBy60 = function(time) {
//     let n = 0
//     for (let i = 0; i < time.length; i++) {
//         for (let j = i + 1; j < time.length; j++) {
//             if ((time[i] + time[j]) % 60 === 0) {
//               n++
//               console.log(time[i], time[j])
//             }
//         }
//     }
//     return n
// };

console.log(numPairsDivisibleBy60([174,188,377,437,54,498,455,239,183,347,59,199,52,488,147,82]))