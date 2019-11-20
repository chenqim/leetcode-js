/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    // 反转数组
    A.reverse()
    let arr = K.toString().split('').map(e => Number(e))
    arr.reverse()
    let len = Math.max(A.length, arr.length)
    let result = []
    // 标志位，是否需要进位
    let s = 0
    // 从第一位开始相加
    for (let i = 0; i < len; i++) {
        let m = A[i] !== undefined ? A[i] : 0
        let n = arr[i] !== undefined ? arr[i] : 0
        if (m + n + s < 10) {
            // 小于 10 直接相加
            result.unshift(m + n + s)
            s = 0
        } else {
            // 大于 10 取余数，改变标志位
            let a = Math.floor((m + n + s) / 10)
            let y = (m + n + s) % 10
            result.unshift(y)
            s = a
            // 最后一位会进位的情况
            if (i === len - 1 && s > 0) result.unshift(1)
        }
    }
    return result
};
console.log(addToArrayForm([2, 1, 5], 806))