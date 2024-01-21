// (console.log('Start');

// // 宏任务1
// setTimeout(function () {
//   console.log('Timeout 1');

//   // 微任务1
//   Promise.resolve().then(function () {
//     console.log('Promise Microtask 1');
//   });
// }, 0);

// // 宏任务2
// setTimeout(function () {
//   console.log('Timeout 2');

//   // 微任务2
//   Promise.resolve().then(function () {
//     console.log('Promise Microtask 2');
//   });
// }, 0);

// console.log('End');
(async () => {
  console.log(1)
  await new Promise((resolve) => {
    console.log(2)
  }).then(()=>{
    console.log(3)
  })
  setTimeout(()=>{
    console.log(4)
  })
  console.log(5)
})()