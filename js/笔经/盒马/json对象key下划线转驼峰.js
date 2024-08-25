const obj = {"a_bc_def_aaa": 111,"ae_iou": 222}
function pascalToCamel(obj) {
    return Object.keys(obj).reduce((camelObj, key) => {
        // match为匹配到的子串，p1为第一个捕获组
      const camelKey = key.replace(/_([a-z])/g, (match, p1) => p1.toUpperCase());
      camelObj[camelKey] = obj[key];
      return camelObj;
    }, {});
}
console.log(pascalToCamel(obj))