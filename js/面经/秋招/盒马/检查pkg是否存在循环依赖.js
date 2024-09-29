let pkg = [
    {
      "name": "a",
      "dependencies": {
        "b": "1.0.0"
      }
    },
    {
      "name": "b",
      "dependencies": {
        "c": "^1.0.0"
      }
    },
    {
      "name": "c",
      "dependencies": {
        "a": "1.0.0"
      }
    }
  ];
  function detectCircularDependencies(packages) {
    const dependencyGraph = {};
    const visited = new Set();
    const recursionStack = new Set();
  
    // 构建依赖图
    packages.forEach(pkg => {
      dependencyGraph[pkg.name] = Object.keys(pkg.dependencies);
    });
  
    // 深度优先搜索函数
    function dfs(node) {
      if (recursionStack.has(node)) {
        // 如果节点已经在递归栈中，说明存在循环依赖
        return true;
      }
  
      if (visited.has(node)) {
        // 如果节点已经被访问过，则跳过
        return false;
      }
  
      visited.add(node);
      recursionStack.add(node);
  
      for (const dependency of dependencyGraph[node]) {
        if (dfs(dependency)) {
          return true;
        }
      }
  
      recursionStack.delete(node);
      return false;
    }
  
    // 检查每个包是否存在循环依赖
    for (const packageName of Object.keys(dependencyGraph)) {
      if (dfs(packageName)) {
        return true; // 存在循环依赖
      }
    }
  
    return false; // 不存在循环依赖
  }
  
  console.log(detectCircularDependencies(pkg)); // 输出：true
  