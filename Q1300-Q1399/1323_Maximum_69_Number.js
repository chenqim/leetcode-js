/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let arr = String(num).split('')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '6') {
            arr[i] = '9'
            break
        }
    }
    return Number(arr.join(''))
};

var maximum69Number2  = function(num) {
    let s = String(num)
    return Number(s.replace('6', '9'))
};

console.log(maximum69Number(9669))