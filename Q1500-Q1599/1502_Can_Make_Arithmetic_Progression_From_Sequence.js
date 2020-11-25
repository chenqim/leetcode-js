/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    if(arr.length < 3) return true
    arr.sort((a, b) => b - a)
    let d = arr[1] - arr[0]
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] !== d) return false
    }
    return true
};

console.log(canMakeArithmeticProgression([3, 5, 1]))