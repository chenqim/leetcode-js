/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const str = n + ''
    let sum = 0
    let muti = 1
    for (let s of str) {
        sum += Number(s)
        muti *= Number(s)
    }
    return muti - sum
};

console.log(subtractProductAndSum(4421))