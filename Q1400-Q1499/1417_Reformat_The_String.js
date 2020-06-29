/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    const arrNumber = []
    const arrCharacter = []
    for (let _s of s) {
        if (_s.charCodeAt() >= 48 && _s.charCodeAt() <= 57) arrNumber.push(_s)
        else arrCharacter.push(_s)
    }
    // 数字多 1 就数字先开始，字母多 1 就字母先开始，相等时随意
    if (arrNumber.length === arrCharacter.length || arrNumber.length === arrCharacter.length + 1) {
        for (let i = 0; i < arrNumber.length; i++) {
            arrCharacter.splice(2 * i, 0, arrNumber[i])
        }
        return arrCharacter.join('')
    } else if (arrNumber.length === arrCharacter.length - 1) {
        for (let i = 0; i < arrCharacter.length; i++) {
            arrNumber.splice(2 * i, 0, arrCharacter[i])
        }
        return arrNumber.join('')
    } else {
        return ''
    }
};

console.log(reformat('covid2019'))