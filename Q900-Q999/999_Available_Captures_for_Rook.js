/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let x = 0
    let y = 0
    // 找出 R 所在的坐标
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 'R') {
                y = i
                x = j
                break
            }
        }
    }
    let count = 0
    let arr = board[y]
    // 向右
    for (let i = x; i < arr.length; i++) {
        if (arr[i] === 'p') {
            count++
            break
        } else if (arr[i] === 'B') {
            break
        }
    }
    // 向左
    for (let i = x; i >= 0; i--) {
        if (arr[i] === 'p') {
            count++
            break
        } else if (arr[i] === 'B') {
            break
        }
    }
    // 向下
    for (let i = y; i < board.length; i++) {
        if (board[i][x] === 'p') {
            count++
            break
        } else if (board[i][x] === 'B') {
            break
        }
    }
    // 向上
    for (let i = y; i >= 0; i--) {
        if (board[i][x] === 'p') {
            count++
            break
        } else if (board[i][x] === 'B') {
            break
        }
    }
    return count
};

console.log(numRookCaptures([[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]]))