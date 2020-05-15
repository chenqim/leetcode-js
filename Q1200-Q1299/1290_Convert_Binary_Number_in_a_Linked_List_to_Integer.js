// import NodeList from '../utils/NodeList.js'
// const { NodeList } = require('../utils/NodeList')
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    if (head === null) return 0
    let ans = ''
    while (head !== null) {
        ans += head.val
        head = head.next
    }
    return parseInt(ans, 2)
};

var getDecimalValue2 = function(head) {
    if (head === null) return 0
    let ans = 0
    while (head !== null) {
        ans = (ans << 1) + head.val
        head = head.next
    }
    return ans
};

// node 环境下执行需要引入 NodeList
let nodeList = new NodeList()
nodeList.push(1)
nodeList.push(0)
nodeList.push(1)
console.log(nodeList)

console.log(getDecimalValue(nodeList.head))