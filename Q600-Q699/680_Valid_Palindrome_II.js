/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    for (let i = 0; i < Math.ceil(s.length / 2); i++) {
        if (s.charAt(i) !== s.charAt(s.length - 1 - i)) {
            // 不知道删除哪个，所以都删除试一下
            // 删除左边字符之后的字符串
            let l = s.substring(0, i) + s.substring(i + 1)
            // 删除右边之后的字符串
            let r = s.substring(0, s.length - 1 - i) + s.substring(s.length - i)
            // 删除之后如果有一个是回文串，则满足条件
            return f(l) || f(r)
        }
    }
    // 没进循环中的判断则说明本来就是个回文串
    return true
};

var f = function(str) {
    if (str === str.split('').reverse().join('')) return true
    return false
} 

console.log(validPalindrome("aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"))