function setTimeoutWithOffset(fn, interval, ...args) {
    let startTime = Date.now()
    let count = 0// 执行次数
    let timer = null
    const task = () => {
      // 时间误差 = 实际时间 - 理想时间 
      const offset = Date.now() - (startTime + count * interval)
      console.log(`第${count + 1}次 系统延迟时间${offset}`)//
      timer = setTimeout(() => {
        fn.apply(this, args);
        count++
        task();
      }, interval - offset);
    };
    task();
    return () => clearTimeout(timer);
  }
  
  //TEST
  const stop = setTimeoutWithOffset(() => console.log(123), 1000)
  setTimeout(() => {
    stop()
  }, 5000);