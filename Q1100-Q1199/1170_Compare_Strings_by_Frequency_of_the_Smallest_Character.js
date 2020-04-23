/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
    const f = (s) => {

        // 方法 1
        // const arr = new Array(26).fill(0)
        // for (let i = 0; i < s.length; i++) {
        //     arr[s.charCodeAt(i) -  'a'.charCodeAt(0)]++
        // }
        // for (let i = 0; i < arr.length; i++) {
        //     if (arr[i] !== 0) return arr[i]
        // }
        // return 0

        // 方法 2
        if (s.length < 2) return 1
        let temp = s[0], max = 1
        for (let i = 1; i < s.length; i++) {
            const _s = s[i]
            if (_s < temp) {
                temp = _s
                max = 1
            } else if (_s === temp) {
                max++
            } else {
                continue
            }
        }
        return max
        
    }

    const result = []
    for (let i = 0; i < queries.length; i++) {
        let count = 0
        for (let j = 0; j < words.length; j++) {
            if (f(queries[i]) < f(words[j])) {
                count++
            }
        }
        result.push(count)
    }
    return result
};

console.log(numSmallerByFrequency(['bbb', 'cc'], ['a', 'aa', 'aaa', 'aaaa']))