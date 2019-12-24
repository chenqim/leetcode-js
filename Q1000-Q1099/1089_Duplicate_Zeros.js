/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    if (arr.includes(0)) {
        const len = arr.length
        for (let i  = 0; i < len; i++) {
            if (arr[i] === 0 && (i !== len - 1)) {
                arr.splice(i + 1, 0, 0)
                // 为了保持原数组长度不变，插入一个 0 就要从末尾删掉一项数据
                arr.pop()
                i++
            }
        }
        // 如果不用 pop() 也可以用下面一种方法截取数组
        // const len2 = arr.length
        // arr.splice(len, len2 - len)
    }
};

let arr = [1, 0, 2, 3, 0, 4, 5, 0]
duplicateZeros(arr)
console.log(arr)