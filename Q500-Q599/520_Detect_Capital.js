/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    // 全小写或者全大写返回 true
    if (word === word.toUpperCase() || word === word.toLowerCase()) return true
    // 第一个大写后面全小写返回 true 否则返回 false
    // unicode: A~Z 65~90 a~z 97~122
    if (word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90) {
        for (let i = 1; i < word.length; i++) {
            if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) {
                return false
            }
        }
    } else {
        return false
    }
    return true
};

console.log(detectCapitalUse('Google'))