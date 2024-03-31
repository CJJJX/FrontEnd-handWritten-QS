class TreeNode{
    constructor(val,left,right){
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}
function createTree(arr){
    let nodes = arr.map(item=>item!==null ? new TreeNode(item) : null)
    const root = nodes[0]
    i = 1
    parentIndex = 0
    while(i < nodes.length){
        let parent = nodes[parentIndex]
        if(parent !== null){
            parent.left = nodes[i]
            i+1 >= nodes.length ? parent.right = null : parent.right = nodes[i+1]
            // 更新i的取值
            i += 2
            // 更新父节点
            parentIndex++
        }else{
            parentIndex++
        }
    }
    return root
}
const arr = [1,2,3,4,5,null,6,null,7]
const root = createTree(arr)
console.log(root)
console.log(minDepthLeafSum(root))//最浅叶子节点和为11
function minDepthLeafSum(root){
    let queue = []
    let cur = root
    queue.push(cur)
    while(queue.length && cur){
        let size = queue.length
        let sum = 0
        while(size--){
            let cur = queue.shift()
            // 当左右节点均为空说明遍历到叶子节点
            if(!cur.left && !cur.right){
                sum += cur.val
            }
            if(cur.left)
            queue.push(cur.left)
            if(cur.right)
            queue.push(cur.right)
        }
        if(sum)
        return sum
    }
}