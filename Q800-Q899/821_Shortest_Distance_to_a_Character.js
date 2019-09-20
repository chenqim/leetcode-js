/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    // 记录目标字符出现的 index
    let arr = []
    for (let i = 0; i < S.length; i++) {
        if (S.charAt(i) === C) arr.push(i)
    }
    let result = []
    for (let i = 0; i < S.length; i++) {
        // 找出 S 中每个字符与 arr 的最小差值（即为所求）
        let min = Math.abs(i - arr[0])
        for (let j = 0; j < arr.length; j++) {
            if (Math.abs(i - arr[j]) < min) min = Math.abs(i - arr[j])
        }
        result.push(min)
    }
    return result
};

console.log(shortestToChar('loveleetcode', 'e'))