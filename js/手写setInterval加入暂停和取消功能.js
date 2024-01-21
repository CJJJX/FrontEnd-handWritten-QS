function mySetInterval(callback, delay) {  
    let intervalId = null;  
    let startTime = null;  
    let elapsedTime = 0;  
    
    const run = () => {  
      if (startTime === null) {  
        startTime = Date.now();  
      }  
      const currentTime = Date.now();  
      const timeDiff = currentTime - startTime;  
      if (timeDiff >= delay) {  
        callback();  
        startTime = null;  
        elapsedTime += timeDiff;  
      } else {  
        setTimeout(run, (delay - timeDiff));  
      }  
    };  
    
    const start = () => {  
      intervalId = setInterval(run, delay);  
    };  
    
    const pause = () => {  
      clearInterval(intervalId);  
      intervalId = null;  
    };  
    
    const resume = () => {  
      if (intervalId === null) {  
        start();  
      }  
    };  
    
    const reset = () => {  
      pause();  
      startTime = null;  
      elapsedTime = 0;  
    };  
    
    return { start, pause, resume, reset };  
  }