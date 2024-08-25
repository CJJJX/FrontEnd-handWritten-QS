const mate = [
    [0,1,0,0,0],
    [0,1,0,1,0],
    [0,0,0,0,0],
    [0,1,1,1,0],
    [0,0,0,1,0]
]
const direction = [
    [0,1], //向下走一步
    [0,-1],//向上走一步
    [1,0],//向右走一步
    [-1,0]//向左走一步
]
const start = [2,1]
const end = [0,0]

const [steps,path] = shortLengthByBfs(mate,start,end)
if(steps!==-1){
    console.log('最短路径为[' + path.join(']=>[') + ']',`最短步数为${steps}`)
}else{
    console.log('没有找到最短路径')
}
// BFS同时走多条路径，当走到终点时
function shortLengthByBfs(mate,start,end){
    const row = mate.length
    const col = mate[0].length
    // 标记访问数组
    let visited = new Array(row).fill(0).map(() => new Array(col).fill(false))
    let queue = []
    queue.push([start,0,[]])
    while(queue.length > 0){
        let [[X,Y],steps,path] = queue.shift()
        if(X == end[0] && Y == end[1]){
            return [steps,path.concat([[X,Y]])]
        }
        for(let dir of direction){
            const [dx,dy] = dir
            let newX = X + dx
            let newY = Y + dy
            if(newX >= 0 && newX < row && newY >= 0 && newY < col && visited[newX][newY] == false){
                visited[newX][newY] = true
                queue.push([ [newX,newY] ,steps+1, path.concat([[X,Y]]) ]) 
            } 
        }
    }
    return [-1,[]]
}   


const row = mate.length
    const col = mate[0].length
let visited = new Array(row).fill(0).map(() => new Array(col).fill(false))
let ans = Infinity
let res = shortLengthByDfs(1,1,1)
console.log(res)
function shortLengthByDfs(x,y,dep){
    
    if(x == end[0] && y == end[1]){
        ans = Math.min(ans,dep)
    }
    for(let dir of direction){
        const [dx,dy] = dir
        let newX = x + dx
        let newY = y + dy
        if(  newX >= 0 && newX < row && newY >= 0 && newY < col && visited[newX][newY] == false && mate[newX][newY] == 0){
            visited[newX][newY] = true
            shortLengthByDfs(newX,newY,dep+1)
            visited[newX][newY] = false
        }
    }
    return ans
}