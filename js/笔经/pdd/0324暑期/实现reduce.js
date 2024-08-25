Array.prototype.myReduce = function(callBacks,initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0]
    let index = initialValue !== undefined ? 0 : 1
    for(;index < this.length;index++){
        accumulator = callBacks(accumulator,this[index],this)
    }
    return accumulator
}
const arr = [1,2,3,4]
const initialValue = 0
const sumWithInitial = arr.myReduce(
    (accumulator,currentValue) => accumulator + currentValue
)
console.log(sumWithInitial)