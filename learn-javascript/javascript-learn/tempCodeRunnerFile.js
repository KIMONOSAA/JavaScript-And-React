new Promise(() => setTimeout(console.log, 0, 'executor')); 
// setTimeout(console.log, 0, 'promise initialized'); 
// // executor 
// // // promise initialized 
// // 添加 setTimeout 可以推迟切换状态：
// let p = new Promise((resolve, reject) => setTimeout(resolve, 1000)); 
// // 在 console.log 打印期约实例的时候，还不会执行超时回调（即 resolve()）
// setTimeout(console.log, 0, p); // Promise <pending> 
// // 无论 resolve()和 reject()中的哪个被调用，状态转换都不可撤销了。于是继续修改状态会静默
// // 失败，如下所示：
// let p = new Promise((resolve, reject) => { 
//  resolve();
//  reject(); // 没有效果
// }); 