const mate = [
    [0,1,0,0,0],
    [0,1,0,1,0],
    [0,0,0,0,0],
    [0,1,1,1,0],
    [0,0,0,1,0]
]
const direction = [
    [0,-1], //向上
    [0,1], //向下
    [-1,0], //向左
    [1,0], //向右
]
const start = [2,0]
const end = [1,4]
const [ steps, path ] = shortLengthByBfs(mate,start,end)
console.log(steps,path)
function shortLengthByBfs(mate,start,end){
    const row = mate.length
    const col = mate[0].length
    let visited = new Array(row).fill(0).map(() => new Array(col).fill(false))
    let queue = []
    queue.push([start,0,[]])
    while(queue.length > 0){
        let [[X,Y],steps,path] = queue.shift()
        // 到终点
        if(X == end[0] && Y == end[1]){
            return [steps+1,path.concat([[X,Y]])] 
        }
        for(let dir of direction){
            const [dx,dy] = dir
            let newX = X + dx
            let newY = Y + dy
            if(newX > 0 && newX < row && newY > 0 && newY < col && visited[newX][newY] == false){
                visited[newX][newY] = true
                queue.push([[newX,newY],steps+1,path.concat([[X,Y]])])
            }
        }
    }
    return [-1,[]]
}