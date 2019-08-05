/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arr = s.split(' ')
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i].split('')
        temp.reverse()
        arr[i] = temp.join('')
    }
    return arr.join(' ')
};

console.log(reverseWords("let's take LeetCode contest"))