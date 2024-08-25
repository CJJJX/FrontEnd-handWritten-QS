const obj = {name:'cjx'}
const handler = {
    get: function(obj,prop){
        return prop in obj ? obj[prop] :undefined
    },
    set: function(obj,prop,value){
        return false //阻止新增
    },
    deleteProperty: function(target,prop){
        return false //阻止删除
    }
}
const p = new Proxy(obj,handler)
p.name = 'cxk'
p.value = 555
delete p.name
console.log(p)



