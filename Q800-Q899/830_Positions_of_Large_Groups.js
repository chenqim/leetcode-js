/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
    let result = []
    for (let i = 0; i < S.length; ) {
        // 先找到较大分组
        if (S.charAt(i) === S.charAt(i + 1) && S.charAt(i + 1) === S.charAt(i + 2)) {
            let len = 3
            // 计算出较大分组的长度
            for (let j = i + 3; j < S.length; j++) {
                if (S.charAt(j) === S.charAt(i)) len++
                else break
            }
            result.push([i, i + len - 1])
            // 跳过该最大 分组，继续循环寻找下一个最大分组
            i = i + len
        } else {
            i++
        }
    }
    return result
};

console.log(largeGroupPositions('abcdddeeeeaabbbcd'))