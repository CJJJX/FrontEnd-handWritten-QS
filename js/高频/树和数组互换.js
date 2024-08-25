const flatArray = [
    { id: 1, parentId: null, name: 'root1' },
    { id: 2, parentId: 1, name: 'child1' },
    { id: 3, parentId: 1, name: 'child2' },
    { id: 4, parentId: 2, name: 'grandchild1' },
    { id: 5, parentId: 3, name: 'grandchild2' },
  ];
//   数组转树
function arrayToTree(arr){
    let res = []
    // 给每个id及对应的内容做map映射
    let map = {}
    arr.forEach(item => {
        map[item.id] = {...item,children:[]}
    })
    arr.forEach(item => {
        if(item.parentId){
            // 找到父节点，将item对应的内容放入父节点的children数组
            map[item.parentId].children.push(map[item.id])
        }
        else{
            // 根节点在map对应的内容直接加入结果数组
            res.push(map[item.id])
        }
    })
    return res
}
//树转数组
function treeToArray(treeNodes) {
    let result = [];
    //递归函数 traverse，用于处理单个节点
    function traverse(node) {
      const newNode = { ...node };
      delete newNode.children;
      // 将没有子节点的新节点添加到结果数组中
      result.push(newNode);
  
      // 如果当前节点包含 children 属性（即有子节点）
      if (node.children) {
        node.children.forEach(traverse);
      }
    }
    treeNodes.forEach(traverse);
    return result;
}
function treeToArray(tree) {
    let res = []
    for (let item of tree) {
        // 克隆当前节点，并删除children属性
        const currrentItem = { ...item}
        delete currrentItem.children
        // 将当前节点加入结果数组中
        res.push(currrentItem);
        // console.log('res',res)
        if (item.children && item.children.length) {
            // 递归调用时传入当前节点的子节点的 children 属性
            res = res.concat(treeToArray(item.children))
        }
    }
    return res
}

let tree = arrayToTree(flatArray)
console.log(tree)
let arr = treeToArray(tree)
console.log(arr)


