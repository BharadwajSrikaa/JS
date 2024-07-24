let intervalId = setInterval(function () {
  console.log(`This function is being executed at the interval`);
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log(`Interval Stopped`);
}, 10000);
