/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let result = []
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i !== j && !result.includes(words[j]) && words[i].includes(words[j])) result.push(words[j])
        }
    }
    return result
};

console.log(stringMatching(['mass', 'as', 'hero', 'superhero']))