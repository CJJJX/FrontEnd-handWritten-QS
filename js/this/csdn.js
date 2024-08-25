var a={
    foo:"123",
    bar:"456",
    that:this
}
console.log(a.that)
var self
function foo(){
   self = this
   setTimeout(function(){
    console.log('id:', this.id)
   },100)
}
foo.call({id: 12})
console.log(self)