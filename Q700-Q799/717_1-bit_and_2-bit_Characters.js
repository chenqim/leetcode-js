/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let i = 0
    for (; i < bits.length - 1;) {
        if (bits[i] === 1) {
            i += 2
        } else if (bits[i] === 0) {
            i += 1
        }
    }
    // 如果 i === bits.length - 1 则为 true
    return i === bits.length - 1
    // 如果 i === bits.length 则为 false
    // return !(i === bits.length)
};

console.log(isOneBitCharacter([1, 1, 1, 0]))