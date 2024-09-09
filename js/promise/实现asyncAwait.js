function generatorToAsync(generatorFun) {
  return function () {
    const gen = generatorFun.apply(this, arguments);
    return new Promise((resolve, reject) => {
      function step(key, args) {
        let res;
        try {
          res = gen[key](args);
        } catch (err) {
          return reject(err);
        }
        const { value, done } = res;
        if (done) {
          return resolve(value);
        } else {
          return Promise.resolve(value).then(
            (val) => step("next", val),
            (err) => step("throw", err)
          );
        }
      }

      step("next");
    });
  };
}
const  getData = (num) => new Promise(resolve => setTimeout(() => resolve('test' + num), 1000));
function* test() {
    const data1 = yield getData(1)
    console.log('data1--',data1)
    const data2 = yield getData(data1)
    console.log('data2--',data2)
    return `success: ${data2}`
}
const asyncFn = generatorToAsync(test)
asyncFn().then(res => console.log(res))


function* gen() {
    yield 1
    yield 2
    yield 3
} 
const g = gen()
console.log(g.next()) //{value: 1,done: false}

