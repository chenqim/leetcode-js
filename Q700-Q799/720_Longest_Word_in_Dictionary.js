/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    // 对数组排序，再利用 Set 对字母存储，小的单词一定包含在后面大的单词里面。后面只需要取前缀相同的
    // 对字母排序后，第一个单词一定是共有的，后面只需在此基础上添加
    words.sort()
    let s = new Set()
    let res = ''
    for (let i = 0; i < words.length; i++) {
        if (words[i].length === 1 || s.has(words[i].substring(0, words[i].length - 1))) {
            res = words[i].length > res.length ? words[i] : res
            s.add(words[i])
        }
    }
    return res
};

console.log(longestWord(["m","mo","moc","moch","mocha","l","la","lat","latt","latte","c","ca","cat"]))