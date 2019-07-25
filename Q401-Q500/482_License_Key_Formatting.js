/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    // 去掉 '-'，再转大写
    let str = S.replace(/-/g, '').toUpperCase()
    let strArr = str.split('') // ["5", "F", "3", "Z", "2", "E", "9", "W"]
    let result = ''
    for (let i = 0; i < str.length; i++) {
        // 每隔 4 个字符串拼接一个 '-'
        if (i > 0 && i % K === 0) {
            result += '-'
        }
        // 倒序拼接
        result += strArr.pop()
    }
    // 最后再反转回去
    return result.split('').reverse().join('')
};

console.log(licenseKeyFormatting2('5F3Z-2e-9-w', 4))