/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    for (let i = 1; i < words.length; i++) {
        let min = Math.min(words[i].length, words[i - 1].length)
        for (let j = 0; j < min; j++) {
            let index0 = order.indexOf(words[i - 1].charAt(j))
            let index1 = order.indexOf(words[i].charAt(j))
            if (index0 > index1) {
                return false
            } else if (index0 === index1) {
                // 比较到最后一个字母任然相等的话
                if (j === min - 1) {
                    if (words[i - 1].length > words[i].length) return false
                }
                continue
            } else {
                break
            }
        }
    }
    return true
};

console.log(isAlienSorted(['word', 'world', 'row'], 'worldabcefghijkmnpqstuvxyz'))