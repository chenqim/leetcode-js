/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let index = 0
    let arr = []
    let flag = true
    for (let i = 0; i < list1.length; i++) {
        let j = list2.indexOf(list1[i])
        if (j > -1) {
            // 给 index 赋一个初始值
            if (flag) {
                index = i + j
                flag = false
            }
            if (i + j < index) {
                // 如果下标和小于之前的下标和则清空数组
                arr = []
                // 重新给下标和赋值
                index = i + j
                // 往数组中加入新元素
                arr.push(list1[i])
            } else if (i + j === index) {
                arr.push(list1[i])
            }
        }
    }
    return arr
};

console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]))