/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    // 备份数组
    let arrCopy = arr.concat()
    // 去重
    let set = new Set(arr)
    // 转回数组
    let uniqArr = Array.from(set)
    // 排序
    uniqArr.sort((a, b) => a - b)
    // 利用 map 建立映射关系
    let map = new Map()
    for (let i = 0; i < uniqArr.length; i++) {
      map.set(uniqArr[i], i + 1)
    }
    // 重新赋值
    for (let i = 0; i < arrCopy.length; i++) {
      arrCopy[i] = map.get(arrCopy[i])
    }
    return arrCopy
};

console.log(arrayRankTransform([37,12,28,9,100,56,80,5,12]))