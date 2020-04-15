/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => a - b)
    let min = arr[2] - arr[1]
    let result = []
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] < min) {
            result = []
            result.push([arr[i - 1], arr[i]])
            min = arr[i] - arr[i - 1]
        } else if (arr[i] - arr[i - 1] === min) {
            result.push([arr[i - 1], arr[i]])
        }
    }
    
    // for (let i = 1; i < arr.length; i++) {
    //     if (arr[i] - arr[i - 1] === min) {
    //        result.push([arr[i - 1], arr[i]])
    //     }
    // }
    
    return result
};

console.log(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]))