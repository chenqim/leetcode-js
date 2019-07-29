/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const s1 = 'qwertyuiop'
    const s2 = 'asdfghjkl'
    const s3 = 'zxcvbnm'
    let result = []
    for (let i = 0; i < words.length; i++) {
        if (s1.includes(words[i].charAt(0).toLowerCase())) {
          filterStr(s1, i)
        } else if (s2.includes(words[i].charAt(0).toLowerCase())) {
          filterStr(s2, i)
        } else {
          filterStr(s3, i)
        }
    }
    function filterStr (s, i) {
        let flag = true
        for (let j = 1; j < words[i].length; j++) {
            if (!s.includes(words[i].charAt(j).toLowerCase())) {
                flag = false
                break
            }
        }
        if (flag) {
            result.push(words[i])
        }
    }
    return result
};

console.log(findWords(['Hello', 'Alaska', 'Dad', 'Peace']))