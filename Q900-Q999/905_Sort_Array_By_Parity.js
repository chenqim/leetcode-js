/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let temp = []
    for (let a of A) {
        if (a % 2 === 0) temp.unshift(a)
        else temp.push(a)
    }
    return temp
};

console.log(sortArrayByParity([3, 1, 2, 4]))