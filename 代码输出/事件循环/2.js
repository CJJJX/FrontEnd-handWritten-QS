new Promise((res) => {  
    console.log('promise1');  // 立即执行并打印  
    res();  // 调用resolve，但这不会立即执行then中的函数  
    console.log('promise2');  // 立即执行并打印  
  }).then(() => {  
    console.log('promise 3');  // 当Promise解决（resolve）后，异步地执行  
  });  
    
  console.log('script end');  // 同步代码继续执行，因此会立即打印
  // promise1
  // promise2
  // script end
  // promise3