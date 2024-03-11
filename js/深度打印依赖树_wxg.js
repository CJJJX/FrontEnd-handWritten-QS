// 在前端开发中，通常会把多个js文件合并成一个文件，以减少网络请求次数，优化加载速度。
// 但当文件间存在依赖关系时，对js合并的顺序有一定要求，比如A.js依赖了B.js,那打印后的文件，
// B.js需要排在A.js前面，实现一个resolve(tree)函数，输出合理打包顺序结果
var tree = {
    name: 'page.js',
    require:[
        {
            name:'A.js',
            require:[
                {
                    name: 'B.js',
                    require:[
                        {
                            name: 'C.js'
                        }
                    ]
                }
            ]
        },
        {
            name:'D.js',
            require:[
                {
                    name: 'C.js',
                },
                {
                    name: 'E.js',
                }
            ]
        },
    ]
} // [c,b,a,e,d] 重复的只需打印一次如c，用map
function resolve(root){
    let res = []
    let map = new Map()
    // 递归函数
    function help(node){
        if(node.require){
            for(let dep of node.require){
                help(dep)
            }
        }
        //重复的只需打印一次如c，用map
        if(!map.get(node.name)){
            res.push(node.name)
        }
        map.set(node.name,true)
    }
    help(root)
    // 递归完返回结果数组
    return res
}
console.log(resolve(tree))
