/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    // 先找出不在 arr1 中的元素
    let arrNotInArr1 = arr1.filter(e => !arr2.includes(e))
    arrNotInArr1.sort((a, b) => a - b)
    // 统计 arr2 中的元素在 arr1 中出现的次数
    const map = new Map()
    for (let i = 0; i < arr2.length; i++) {
        map.set(arr2[i], 0)
    }
    for (let i = 0; i < arr1.length; i++) {
        if (map.has(arr1[i])) {
            let count = map.get(arr1[i])
            count++
            map.set(arr1[i], count)
        }
    }
    // 在 arr2 中根据每个元素出现的次数在后面添加相应个数的元素
    for (let i = 0; i < arr2.length; i++) {
        let count = map.get(arr2[i])
        let a = new Array(count - 1).fill(arr2[i])
        arr2.splice(i, 0, ...a)
        i += count - 1
    }
    // 拼接返回
    return arr2.concat(arrNotInArr1)
};

console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]))