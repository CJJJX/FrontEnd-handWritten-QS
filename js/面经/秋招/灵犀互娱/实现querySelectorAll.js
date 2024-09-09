// 判断单个元素是否匹配单个选择器
function matchSelector(selector, element) {
    if (selector.startsWith('.')) {
      // 类选择器
      return element.classList.contains(selector.slice(1));
    } else if (selector.startsWith('#')) {
      // ID 选择器
      return element.id === selector.slice(1);
    } else if (selector.startsWith('[') && selector.endsWith(']')) {
      // 属性选择器 [attr=value]
      const [attr, value] = selector.slice(1, -1).split('=');
      return element.getAttribute(attr) === value;
    } else {
      // 标签选择器
      return element.tagName.toLowerCase() === selector.toLowerCase();
    }
  }
  
  // 实现 querySelectorAll
  function querySelectorAll(selector, element) {
    if (element === null) return [];
  
    // 处理组合选择器，按空格拆分多个层级选择器
    const selectors = selector.split(' ').filter(Boolean); // 过滤掉空字符串
    const result = [];
    
    // 开始递归匹配所有符合条件的元素
    querySelectorAllRecursive(selectors, 0, element, result);
    
    return result;
  }
  
  // 递归匹配所有符合条件的元素
  function querySelectorAllRecursive(selectors, index, element, result) {
    if (index >= selectors.length) return;
  
    const selector = selectors[index];
    const children = element.children;
  
    for (let child of children) {
      if (matchSelector(selector, child)) {
        // 如果当前选择器匹配
        if (index === selectors.length - 1) {
          // 如果是最后一级选择器，添加到结果数组中
          result.push(child);
        } else {
          // 否则继续匹配子元素的下一级选择器
          querySelectorAllRecursive(selectors, index + 1, child, result);
        }
      }
      // 继续递归匹配当前子元素的子元素
      querySelectorAllRecursive(selectors, index, child, result);
    }
  }
  
  // 测试代码
  const results = querySelectorAll('.test .active', document.body);
  console.log(results);
  