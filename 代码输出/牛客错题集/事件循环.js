// 1.
Promise.all([]).then((res) => console.log('all')) //all
Promise.race([]).then((res) => console.log('race')) //pending态不打印
// 2.
Promise.reject(0).catch(e => e).catch(e => console.log(e)) 
//第一个catch执行后返回的已经是一个成功的promise对象了，故不会执行第二个catch回调