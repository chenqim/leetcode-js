/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    // 递归超时
    // const f = (m) => {
    //     if (m === 0) return 0
    //     else if (m === 1 || m === 2) return 1
    //     else return f(m - 1) + f (m - 2) + f(m - 3)
    // }
    // return f(n)
    if (n === 0) return 0
    if (n === 1 || n === 2) return 1
    let arr = new Array(n).fill(0)
    arr[0] = 0
    arr[1] = 1
    arr[2] = 1
    for (let i = 3; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3]
    }
    return arr[n - 1] + arr[n - 2] + arr[n - 3]
};

console.log(tribonacci(35))