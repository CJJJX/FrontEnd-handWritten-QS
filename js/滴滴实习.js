//找出出现次数最多的 字母和字符数量
let str = 'abbbccccc'
function getMax(str){
    const map = new Map()
    let s = ''
    let max = 0
    for(string of str){
        if(map.has(string))
        map.set(string,map.get(string)+1)
        else
        map.set(string,1)
    }
    map.forEach((l,str)=>{
        if(l > max){
            max = l
            s = str
        }
    })
    return [s,max]
}
console.log(getMax(str))
//去除出现次数最少的字母
let s1 = 'ababac' //--> ababa
let s2 = 'aaabbbcceeff' //--> aaabbb
let s3 = 'aabbccceeefffff' //--> ccceeefffff
function removeLessChar(str){
    const map = new Map()
    for(char of str){
        map.set(char,map.has(char)? map.get(char)+1:0)
    }
    const min = Math.min(...map.values())
    const res = Array.from(str).filter(char => map.get(char)!==min)
    return res
}
console.log(removeLessChar(s1))
console.log(removeLessChar(s2))
console.log(removeLessChar(s3))
//去重value 包括children里的value
let brr = [
	{
		key: "x",
		value: 2,
		children: [
			{ key: "x", value: 4 },
			{ key: "x", value: 4 },
		],
	},
	{ key: "x", value: 2 },
	{ key: "x", value: 3 },
]
function removeDuplicates(arr) {  
    // 创建一个新数组，用于存储去重后的结果  
    let uniqueArr = [];  
    
    // 遍历原始数组  
    for (let i = 0; i < arr.length; i++) {  
      let currentObj = arr[i];  
      let isDuplicate = false;  
    
      // 检查当前对象是否已经存在于新数组中  
      for (let j = 0; j < uniqueArr.length; j++) {  
        if (uniqueArr[j].value === currentObj.value) {  
          isDuplicate = true;  
          break;  
        }  
      }  
    
      // 如果当前对象不是重复的，则将其添加到新数组中  
      if (!isDuplicate) {  
        uniqueArr.push(currentObj);  
      }  
    }  
    
    // 递归处理子数组中的重复项  
    for (let i = 0; i < uniqueArr.length; i++) {  
      let currentObj = uniqueArr[i];  
      if (Array.isArray(currentObj.children)) {  
        currentObj.children = removeDuplicates(currentObj.children);  
      }  
    }  
    
    return uniqueArr;  
  }      
  let uniqueArr = removeDuplicates(brr);  
  console.log(uniqueArr);
//对象排序 按date
//对象排序 不允许用sort 
  let dates = [
    { id: 1, date: new Date(100000) },
    { id: 4, date: new Date(100001) },
    { id: 2, date: new Date(200000) },
    { id: 3, date: new Date(300000) }
  ]
  
  function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[0];
    const left = [];
    const right = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].date < pivot.date) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  console.log(quickSort(dates))