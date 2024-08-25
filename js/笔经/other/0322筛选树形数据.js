// 实现一个方法getAllIdsByLevel(tree,level)获取指定小于等于level层级的所有id
const tree = [{
    id: 1,
    name: '一级 1',
    children: [{
        id: 4,
        name: '二级 1-1',
        children: [{
            id: 9,
            name: '三级 1-1-1'
        }, {
            id: 10,
            name: '三级 1-1-2'
        }]
    }, {
        id: 5,
        name: '二级 1-2',
        children: [{
            id: 11,
            name: '三级 1-2-1'
        }]
    }]
}, {
    id: 2,
    name: '一级 2',
    children: [{
        id: 6,
        name: '二级 2-1',
        children: [{
            id: 13,
            name: '三级 2-1-1'
        }]
    }]
}]
const getAllIdsByLevel = (tree, level) => {
    let result = []
    const getIds = (tree,curLevel) =>{
        if(curLevel <= level){
            let len = tree.length
            for(let i = 0;i < len;i++){
                result.push(tree[i].id)
                if(tree[i].hasOwnProperty('children'))
                    getIds(tree[i].children,curLevel+1)
                else
                    continue        
        }
        }
        else
            return
    }
    getIds(tree,1)
    return result
}
console.log(getAllIdsByLevel(tree, 2)) // [1, 2, 4, 5, 6]
