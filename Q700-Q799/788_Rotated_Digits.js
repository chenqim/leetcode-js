/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
    let count = 0
    for (let i = 1; i <= N; i++) {
        let flag = true // 表示是否不存在 [3, 4, 7] 这三个数字中的一个（存在为 false，不存在为 true）
        let a = i
        let c = 0 // c 为 [2, 5, 6, 9] 这四个数字的个数
        while (a) {
            let d = a % 10
            if (d === 3 || d === 4 || d === 7) {
                flag = false
                break
            } else if (d === 2 || d === 5 || d === 6 || d === 9) {
                c++
            }
            a = Math.floor(a / 10)
        }
        // 不存在 [3, 4, 7] 中的其中一个，但是至少存在 [2, 5, 6, 9] 中的其中一个
        if (flag && c !== 0) count++
    }
    return count
};

console.log(rotatedDigits(10))