/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    const count = (s) => {
        let c = 0
        for (let _s of s) {
            if (_s === '1') c++
        }
        return c
    }
    arr.sort((a, b) => {
        const a_2 = count(a.toString(2))
        const b_2 = count(b.toString(2))
        if (a_2 > b_2) {
            return 1
        } else if (a_2 === b_2) {
            return a - b
        } else {
            return -1
        }
    })
    return arr
};

console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]))