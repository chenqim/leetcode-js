/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    let arr = []
    for (let i = 0; i < S.length; i++) {
        let letter = S.charAt(i)
        if ((letter >= 'A' && letter <= 'Z') || (letter >= 'a' && letter <= 'z')) arr.push(letter)
    }
    let arr2 = S.split('')
    for (let i = 0; i < arr2.length; i++) {
        if ((arr2[i] >= 'A' && arr2[i] <= 'Z') || (arr2[i] >= 'a' && arr2[i] <= 'z')) arr2[i] = arr.pop()
    }
    return arr2.join('')
};

console.log(reverseOnlyLetters('Test1ng-Leet=code-Q!'))