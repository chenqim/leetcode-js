/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    // 处理字符串，转小写，去标点符号，再转成字符串数组
    let sArr = paragraph.toLowerCase().replace(/[!|?|'|,|;|.]/g, ' ').split(/\s+/)
    let map = new Map()
    for (let e of sArr) {
        if (map.has(e)) {
            let count = map.get(e)
            count++
            map.set(e, count)
        } else {
            map.set(e, 1)
        }
    }
    // map 转 array
    let mapArr = Array.from(map)
    // 按出现次数排序
    mapArr.sort((a, b) => {
        if (a[1] > b[1]) return -1
        if (a[1] < b[1]) return 1
    })
    // 找到出现次数最多并且不在 banned 中的单词即可
    for (let e of mapArr) {
        if (banned.indexOf(e[0]) === -1) return e[0]
    }
};

console.log(mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', ['hit']))