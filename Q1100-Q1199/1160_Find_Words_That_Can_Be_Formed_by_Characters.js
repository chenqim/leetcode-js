/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let len = 0
    let c = chars
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            let index = c.indexOf(words[i].charAt(j))
            if (index > -1) {
                // 去掉用过的那个字符串
                // c = c.substring(0, index) + c.substring(index + 1)
                c = c.replace(c[index], '')
                // 最后一个字符也存在的话就说明这个单词可以被拼写
                if (j === words[i].length - 1) {
                    len += words[i].length
                    c = chars
                    break
                }
            } else {
                c = chars
                break
            }
        }
    }
    return len
};

console.log(countCharacters(['hello', 'world', 'leetcode'], 'welldonehoneyr'))