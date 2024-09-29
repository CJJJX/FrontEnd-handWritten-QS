function add(...args1) {
    // 创建一个内部函数来处理连续调用
    const curried = (...args2) => {
      // 合并参数，并递归返回 curried 函数
      return add(...args1.concat(args2));
    };
  
    // 使用 toString 或 valueOf 进行隐式转换，检测到需要计算结果时自动返回
    curried.valueOf = () => {
      // 计算所有参数的总和
      return args1.reduce((acc, curr) => acc + curr, 0);
    };
  
    return curried;
  }
  
  // 测试
  console.log(add(2, 3, 4).valueOf()); // 9
  console.log(add(2)(3, 4).valueOf()); // 9
  console.log(add(2)(3)(4).valueOf()); // 9
  console.log(add(2, 3)(4).valueOf()); // 9
  