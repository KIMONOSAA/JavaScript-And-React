
const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

//回调函数（回调地狱）
// function animateElement(element, keyframes, timing, callback) {
//   element.animate(keyframes, timing).onfinish = callback;
// }

// function alice() {
//   animateElement(alice1, aliceTumbling, aliceTiming, function() {
//     animateElement(alice2, aliceTumbling, aliceTiming, function() {
//       animateElement(alice3, aliceTumbling, aliceTiming, function() {
//       });
//     });
//   });
// }

// alice();
//示例1：使用显式返回的箭头函数 promise
// const animateElement = (element, keyframes, timing) => {
//   return new Promise((resolve) => {
//     element.animate(keyframes, timing).onfinish = resolve;
//   });
// };

// const alice = () => {
//   animateElement(alice1, aliceTumbling, aliceTiming)
//     .then(() => animateElement(alice2, aliceTumbling, aliceTiming))
//     .then(() => animateElement(alice3, aliceTumbling, aliceTiming))
//     .then(() => {
//       // 在最后一个动画完成后执行的逻辑
//     });
// };

// alice();

// 示例2：使用隐式返回的箭头函数和简写的 Promise 链语法
// const animateElement = (element, keyframes, timing) =>
//   new Promise((resolve) => {
//     element.animate(keyframes, timing).onfinish = resolve;
//   });

// const alice = () =>
//   animateElement(alice1, aliceTumbling, aliceTiming)
//     .then(() => animateElement(alice2, aliceTumbling, aliceTiming))
//     .then(() => animateElement(alice3, aliceTumbling, aliceTiming))
//     .then(() => {
//       // 在最后一个动画完成后执行的逻辑
//     });

// alice();

// 示例1：使用函数声明
// function animateElement(element, keyframes, timing) {
//   return new Promise(function (resolve) {
//     element.animate(keyframes, timing).onfinish = resolve;
//   });
// }

// function alice() {
//   animateElement(alice1, aliceTumbling, aliceTiming)
//     .then(function () {
//       return animateElement(alice2, aliceTumbling, aliceTiming);
//     })
//     .then(function () {
//       return animateElement(alice3, aliceTumbling, aliceTiming);
//     })
//     .then(function () {
//       // 在最后一个动画完成后执行的逻辑
//     });
// }

// alice();

//async/await
// function animateElement(element,keyframes,timing){
//   return new Promise(function(resolve){
//     element.animate(keyframes,timing).onfinish = resolve;
//   });
// }
// async function alice(){
//   await animateElement(alice1,aliceTumbling,aliceTiming);
//   await animateElement(alice2,aliceTumbling,aliceTiming);
//   await animateElement(alice3,aliceTumbling,aliceTiming);
// }
// alice();

