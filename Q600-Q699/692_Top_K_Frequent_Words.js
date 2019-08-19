/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    // 用 map 统计各个单词出现的次数
    let map = new Map()
    for (let i = 0; i < words.length; i++) {
        if (map.has(words[i])) {
            let count = map.get(words[i])
            count++
            map.set(words[i], count)
        } else {
            map.set(words[i], 1)
        }
    }
    // map 转 array
    var arr = Array.from(map)
    // 按出现次数倒序排序，如果出现次数相同，则按出现的单词字典顺序排序
    arr.sort((a, b) => {
        if (a[1] > b[1]) {
            return -1
        } else if (a[1] < b[1]) {
            return 1
        } else {
            if (a[0] > b[0]) {
                return 1
            } else {
                return -1
            }
        }
    })
    // 取前 k 个
    let result = []
    for (let i = 0; i < k; i++) {
        result.push(arr[i][0])
    }
    return result
};

console.log(topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4))