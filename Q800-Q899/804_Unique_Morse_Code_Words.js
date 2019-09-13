/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  const arr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  const set = new Set()
  for (let i = 0; i < words.length; i++) {
      let temp = ''
      for (let j = 0; j < words[i].length; j++) {
          temp += arr[words[i].charCodeAt(j) - 97]
      }
      set.add(temp)
  }
  return set.size
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]))