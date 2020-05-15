// 节点类
function Node (val) {
  this.val = val
  this.next = null
}

// 链表类
function NodeList () {
  this.head = null
  this.length = 0
  // 向链表末尾追加元素
  this.push = push
  // 在值为 val 的节点后面添加一个值为 newVal 的节点
  this.insertAfter = insertAfter
  // 在链表中查找值为 val 的节点
  this.find = find
  // 在链表中查找值为 val 的节点的前一个节点
  this.findPrev = findPrev
  // 删除链表中值为 val 的节点
  this.remove = remove
  // 将值为 val 的节点修改为 newVal
  this.update = update
  // 打印链表
  this.toString = toString
}

function push (val) {

  let node = new Node(val)
  // 第一个节点
  if (this.head === null) {
    this.head = node
  } else {
    let current = this.head
    // 找到最后一个节点
    while (current.next !== null) {
      current = current.next
    }
    // 最后一个节点后面追加节点
    current.next = node
  }
  this.length++

}

function insertAfter (val, newVal) {

  let current = this.find(val)
  if (current === null) return -1
  let node = new Node(newVal)
  // 先将当前节点的指向给到新节点的指向
  node.next = current.next
  // 再将当前节点指向新节点
  current.next = node
  this.length++

}

function find (val) {

  // 空链表
  if (this.head === null) return null
  let current = this.head
  // 查找到最后一个节点之前
  while (current.next !== null) {
    if (current.val === val) return current
    current = current.next
  }
  // 判断最后一个节点
  if (current.val === val) return current
  return null

}

function findPrev (val) {

  // 空链表或者查找第一个节点的前一个节点均查不到
  if (this.head === null || this.head.val === val) return null
  let current = this.head
  // 最后一个节点不进循环，最后一个节点不可能是某个节点的前一个节点
  while (current.next !== null) {
    if (current.next.val === val) return current
    current = current.next
  }
  return null

}

function remove (val) {

  let current = this.find(val)
  if (current === null) return -1
  else {
    let prev = this.findPrev(val)
    if (prev !== null) {
      prev.next = current.next
    } else {
      this.head = current.next
    }
  }
  this.length--

}

function update (val, newVal) {

  let current = this.find(val)
  if (current === null) return -1
  current.val = newVal

}

function toString () {

  let current = this.head
  let str = ''
  let index = 0
  while (current !== null) {
    // str += index + current.val + (current.next ? ' -> ' : '')
    str += `(${index}) ${current.val}${current.next ? ' -> ' : ''}`
    current = current.next
    index++
  }
  console.log(str)

}

// export default NodeList
// module.exports = {
//   NodeList
// }