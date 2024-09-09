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
  
  // 递归查找匹配的元素
  function querySelector(selector, element) {
    if (element === null) return null;
  
    // 处理组合选择器，按空格拆分多个层级选择器
    const selectors = selector.split(' ').filter(Boolean); // 过滤掉空字符串
    return querySelectorRecursive(selectors, 0, element);
  }
  
  // 递归匹配每一级选择器
  function querySelectorRecursive(selectors, index, element) {
    if (index >= selectors.length) return null;
  
    const selector = selectors[index];
    const children = element.children;
  
    for (let child of children) {
      if (matchSelector(selector, child)) {
        // 如果匹配了当前选择器，且这是最后一级选择器，返回该元素
        if (index === selectors.length - 1) {
          return child;
        } else {
          // 否则继续匹配子元素的下一级选择器
          const found = querySelectorRecursive(selectors, index + 1, child);
          if (found !== null) return found;
        }
      } else {
        // 如果当前子元素不匹配，继续递归其子节点
        const found = querySelectorRecursive(selectors, index, child);
        if (found !== null) return found;
      }
    }
  
    return null;
  }
  
  // 测试代码
  const result = querySelector('.test .active', document.body);
  console.log(result);
  