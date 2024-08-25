let graph = new Array(100).fill(0).map(() => [])
// 1 2
// 2 3
graph[1].push(2)
graph[2].push(1,3)
graph[3].push(2)
let s = 'BRB'
let res = 0
function dfs(u,fa){
    
    let count = [0,0]
    if(s.charAt(u-1) == 'B')
    count[0]++
    else
    count[1]++
    for(let x of graph[u]){
        if(x == fa)
        continue
       let v = dfs(x,u)
       count[0] += v[0]
       count[1] += v[1]
    }
    if(count[0] > 0 && count[1] > 0)
    res++
    return count
}
dfs(1,0)
console.log(res)