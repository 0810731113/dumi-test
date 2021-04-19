console.log('开始');
process.nextTick(() => {
  console.log('下一个时间点的回调');
});
console.log('调度');

console.log(`此进程的 pid 是 ${process.pid}`);
console.log(process.platform);
console.log(process.resourceUsage());
