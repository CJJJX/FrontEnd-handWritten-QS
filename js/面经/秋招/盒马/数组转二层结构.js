// 输入项
const itemList = [
    {
      id: 4,
      paramName: '供应链属性',
      parentId: 0
    },
    {
      id: 2,
      paramName: '供应链属性',
      parentId: 4
    },
    {
      id: 5,
      paramName: '供应链属性',
      parentId: 0
    },
    {
      id: 6,
      paramName: '供应链属性',
      parentId: 5
    }
  ];
  
  buildTree(itemList);
  
  /**
  * 补充下面函数，函数返回示例如下
  * @param {ItemList} arr
  *	@return {ItemTreeNode[]}
  **/
  function buildTree(arr) {
    let res = []
    const map = {}
    arr.forEach(item => {
      if(!map[item.id]) {
        map[item.id] = {...item,children: []}
      }
      const node = map[item.id]
      if(item.parentId == 0) {
        res.push(node)
      }else{
        if(!map[item.parentId])
          map[item.parentId] = {...item,children: []}
        map[item.parentId].children.push(node)
      }
    })
    return res
  }
  
  // ==========> 函数返回示例,最底层不能有children
  // [
  //   {
  //     id: 4,
  //     paramName: '供应链属性',
  //     parentId: 0,
  //     children: [
  //       {
  //         id: 2,
  //         paramName: '供应链属性',
  //         parentId: 4,
  //       },
  //     ],
  //   },
  //     {
  //     id: 5,
  //     paramName: '供应链属性',
  //     parentId: 0,
  //     children: [
  //       {
  //         id: 6,
  //         paramName: '供应链属性',
  //         parentId: 5,
  //       },
  //     ],
  //   },
  // ];