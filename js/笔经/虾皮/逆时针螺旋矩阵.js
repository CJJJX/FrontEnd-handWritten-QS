// 给定一个m行n列的二维矩阵，无重复元素，按照逆时针螺旋遍历矩阵，输出矩阵的最后一项。
// 示例1
// 输入
// [[1,2,3],[4,5,6],[7,8,9],[10,11,12]]
// 输出
// 8
// 说明
// 输入［[1,2,3],[4,5,6],[7,8,9],[10,11,12]],初始点数字1，则遍历序列为［1,4,7,10,11,12,9,6,3,2,5,8]，输出8。
// 示例2
// 输入
// [[9,7,5,3,2],[4,6,8,0,1]]
// 输出
// 7
// 说明
// 输入［[9,7,5,3,2],[4,6,8,0,1]]，初始点数字9，则遍历序列为［9,4,6,8,0,1,2,3,5,7]，输出7。
function test(arr) {
    let res = []
    let rows = arr.length
    let cols = arr[0].length
    // 逆时针遍历顺序为下左上右
    let directionIndex = 0 //当前遍历的方向
    let directions = [[1,0],[0,1],[-1,0],[0,-1]] // 当前方向上row,col的增量
    let used = new Array(rows) // 判断是否遍历过
    for(let i = 0;i < rows;i ++) {
        used[i] = new Array(cols).fill(0)
    }
    let total = rows * cols
    let row = 0
    let col = 0
    for(let i = 0;i < total;i ++) {
        res.push(arr[row][col])
        used[row][col] = 1
        let nextRow = row + directions[directionIndex][0]
        let nextCol = col + directions[directionIndex][1]
        if(nextCol < 0 || nextCol >= cols || nextRow < 0 || nextRow >= rows || used[nextRow][nextCol])
        directionIndex = (directionIndex + 1) % 4
        row += directions[directionIndex][0]
        col += directions[directionIndex][1]
    }
    return res[res.length-1]
}
console.log(test([[1,2,3],[4,5,6],[7,8,9],[10,11,12]]))
console.log(test([[9,7,5,3,2],[4,6,8,0,1]]))
console.log(test([[9,7,5,3,2],[4,6,8,0,1]]))