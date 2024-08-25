// 常量定义
const N = 1e5 + 10;

// 图的邻接列表表示
let graph = new Array(N).fill(null).map(() => []);

// 结果变量
let res = 0;

// 输入的字符串，注意JavaScript中的字符串是不可变的，所以我们不需要"+s"来模拟C++中的字符串偏移
let s = '';

// DFS函数
function dfs(u, fa) {
    let color = [0, 0]; // 初始化颜色数组
    if (s.charAt(u - 1) === 'B') color[0]++; // 注意JavaScript中的字符串索引从0开始，所以我们需要u-1
    else color[1]++;

    for (let x of graph[u]) { // 遍历子树
        if (x === fa) continue;
        let v = dfs(x, u); // 递归调用DFS
        color[0] += v[0];
        color[1] += v[1];
    }

    if (color[0] > 0 && color[1] > 0) res++; // 如果两种颜色都存在，则结果加1
    return color; // 返回颜色数组
}

// 主函数
function main() {
    // 假设n和s以及图的边已经通过某种方式输入（例如，从HTML表单、命令行参数或通过AJAX从服务器获取）
    // 这里我们仅模拟输入过程
    let n = 5; // 示例值
    s = 'BRBRB'; // 示例值，注意这里不需要"+s"，因为JavaScript字符串索引从0开始

    // 假设边的输入如下（示例值）
    // 1 2
    // 1 3
    // 2 4
    // 2 5
    graph[1].push(2, 3);
    graph[2].push(1, 4, 5);
    graph[3].push(1);
    graph[4].push(2);
    graph[5].push(2);

    dfs(1, 0); // 从根节点1开始DFS
    console.log(res); // 输出结果
}

// 调用主函数
main();