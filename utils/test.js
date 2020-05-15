let nodeList = new NodeList()

nodeList.push('1st element')
nodeList.push('2nd element')
nodeList.push('3rd element')
nodeList.push('4th element')

console.log('nodeList', nodeList)

console.log('find', nodeList.find('1st element'))
console.log('find', nodeList.find('2nd element'))
console.log('find', nodeList.find('3rd element'))
console.log('find', nodeList.find('4th element'))

console.log('findPrev', nodeList.findPrev('1st element'))
console.log('findPrev', nodeList.findPrev('2nd element'))
console.log('findPrev', nodeList.findPrev('3rd element'))
console.log('findPrev', nodeList.findPrev('4th element'))

nodeList.remove('4th element')
console.log('length', nodeList.length, 'nodeList', nodeList)

nodeList.insertAfter('2nd element', '2nd element 2')
console.log('length', nodeList.length, 'nodeList', nodeList)

nodeList.update('2nd element', '2nd element update')
console.log('length', nodeList.length, 'nodeList', nodeList)

nodeList.toString()