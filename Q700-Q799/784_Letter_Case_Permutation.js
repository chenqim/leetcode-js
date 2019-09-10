/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    let dfs = (index, stringArr, array) => {
        if (index >= stringArr.length) {
            array.push(stringArr.join(''))
            return
        }
        // 遇到字母就分两条路走（一条是改变大小写往下走，一条是不改变大小写继续往下走）
        if (stringArr[index] >= 'A' && stringArr[index] <= 'Z') {
            stringArr[index] = stringArr[index].toLowerCase()
            dfs(index + 1, stringArr, array)
            stringArr[index] = stringArr[index].toUpperCase() // 变回来
            dfs(index + 1, stringArr, array)
        } else if (stringArr[index] >= 'a' && stringArr[index] <= 'z') {
            stringArr[index] = stringArr[index].toUpperCase()
            dfs(index + 1, stringArr, array)
            stringArr[index] = stringArr[index].toLowerCase() // 变回来
            dfs(index + 1, stringArr, array)
        } else {
            dfs(index + 1, stringArr, array)
        }
    }
    const arr = []
    dfs(0, S.split(''), arr)
    return arr
};

console.log(letterCasePermutation('a1b2z3'))