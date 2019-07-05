/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // 去空格
  s = s.replace(/\s/g, '')
  let stack = []
  for (let i = 0; i < s.length; i ++) {
      // 如果是左括号则入栈 如果是右括号则与出栈的值相比 如果不同则是无效的
      if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
          stack.push(s[i])
      } else if (s[i] === ')') {
          if (stack.pop() !== '(') {
              return false
          }
      } else if (s[i] === '}') {
          if (stack.pop() !== '{') {
              return false
          }
      }  else if (s[i] === ']') {
          if (stack.pop() !== '[') {
              return false
          }
      } 
  }
  // 如果 stack 中还有多余的未匹配则说明是无效的
  return !stack.length
};

console.log(isValid('()[({}){}[]](){}'))