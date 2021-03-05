setTimeout(() => {
  console.log('timer1');
  Promise.resolve().then(function() {
    console.log('promise1');
  });
  console.log('timer1111');
}, 0);

console.log('开始');
process.nextTick(() => {
  console.log('下一个时间点的回调');
});
console.log('调度');

Promise.resolve().then(function() {
  console.log('promise开始');
});

setTimeout(() => {
  console.log('timer2');
  Promise.resolve().then(function() {
    console.log('promise2');
  });
}, 0);
