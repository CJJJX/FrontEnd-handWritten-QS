Promise.resolve("1")
  .then((res) => {
    console.log(res);
  }) //这里then返回的promise没有resolve，但是有finally所以会执行
  .finally(() => {
    console.log("finally");
  });
Promise.resolve("2")
  .finally(() => {
    console.log("finally2");
    return "我是finally2返回的"; //这里没有返回新的promise，无效代码
  })
  .then((res) => { //接受已完成的promise传递的2
    console.log(res, "666");
  });
 // 1
 // finally2
 // finally
 // 2 666 