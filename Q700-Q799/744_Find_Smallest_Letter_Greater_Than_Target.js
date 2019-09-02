/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    if (target >= letters[letters.length - 1] || target < letters[0]) return letters[0]
    for (let l of letters) {
        if (l > target) return l
    }
};

console.log(nextGreatestLetter(['c', 'f', 'j'], 'd'))