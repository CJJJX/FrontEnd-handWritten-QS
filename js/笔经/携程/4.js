var isAnagram = function(s, t) {
    let mapA = new Map()
    let mapB = new Map()
    for(let item of s){
        mapA.has(item) ? mapA.set(item,mapA.get(item)+1) : mapA.set(item,1)
    }
    for(let item of t){
        mapB.has(item) ? mapB.set(item,mapB.get(item)+1) : mapB.set(item,1)
    }
    if(mapA.size !== mapB.size)
    return false
    let flag = true
    for(let key of mapA.keys()){
      if( !(mapB.has(key) && mapB.get(key) == mapA.get(key)) ) 
      flag = false
    }
    return flag
};
isAnagram('rat','car')
let str = 'geoivs'
console.log([...str])