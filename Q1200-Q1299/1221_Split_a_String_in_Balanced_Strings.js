/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let num = 0
    let n = 0
    for (let _s of s) {
        if (_s === 'R') n++
        if (_s === "L") n--
        if (n === 0) num++
    }
    return num
};

var balancedStringSplit2 = function(s) {
    let num = 0
    let arr = []
    // 利用栈的思想，当栈的大小为 0 时，说明匹配成功一个
    for (let _s of s) {
        if (arr.length === 0) {
            arr.push(_s)
        } else {
            if (arr[arr.length - 1] !== _s) {
                arr.pop()
                if (arr.length === 0) num++
            } else {
                arr.push(_s)
            }
        }
    }
    return num
};

console.log(balancedStringSplit('RLLLLRRRLR'))