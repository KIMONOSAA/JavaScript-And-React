// 函数的定义方式

//第一种
// function sum (num1,num2){
//     return num1+num2;
// }

// //第二种
// let sum = function(num1,num2){
//     return num1+num2;
// };

// //第三种
// let sum = (num1,num2) => {
//     return num1+num2;
// };

//箭头函数
// let sum = (num1,num2) => {
//     return num1+num2;
// };
// let sum1 = function(num1,num2){
//     return num1*num2;
// }
// console.log(sum1(114514,520));
// console.log(sum(114514,520));

// let init = [1,2,3];

// console.log(init.map(function(i) {return i + 1;}));
// console.log(init.map((i) => {return i + 1;}));
// 如果只有一个参数，那也可以不用括号。只有没有参数，或者多个参数的情况下，才需要使用括号：

// let double = (x) => {return 2 * x;};
// let lalalal = x => {return 114514*x;};

// let value = {};
// let setName = (x) => x.name = "Matt";
// setName(value);

// console.log(value.name);

// 因为函数名就是指向函数的指针，所以它们跟其他包含对象指针的变量具有相同的行为。这意味着
// 一个函数可以有多个名称
// function sum(num1,num2){
//     return num1+num2;
// }

// console.log(sum(10,10));

// let anotherSum = sum;
// console.log(anotherSum(10,545647564654));

// sum = null;
// console.log(anotherSum(745,888));

// arguments 对象是一个类数组对象（但不是 Array 的实例），因此可以使用中括号语法访问其中的
// 元素（第一个参数是 arguments[0]，第二个参数是 arguments[1]）。而要确定传进来多少个参数，
// 可以访问 arguments.length 属性。

// function sayHi(name,message){
//     console.log("hello "+name + "," + message);
// }
// function sayHi(){
//     console.log("hello "+ arguments[0] + "," + arguments[1]);
// }
// function howManyArgs(){
//     console.log(arguments.length);
// }

// howManyArgs("string",45);
// howManyArgs();
// sayHi("张三","I love YOU");

// 在使用默认参数时，arguments 对象的值不反映参数的默认值，只反映传给函数的参数。当然，
// 跟 ES5 严格模式一样，修改命名参数也不会影响 arguments 对象，它始终以调用函数时传入的值为准

// 默认参数作用域与暂时性死区
// 参数初始化顺序遵循“暂时性死区”规则，即前面定义的参数不能引用后面定义的。

//调用时会报错
// function makeKing(name = numerals,numerals = 'VIII'){
//     return `King ${name} ${numerals}`;
// }
// 参数也存在于自己的作用域中，它们不能引用函数体的作用域：
// function makeKing(name = 'Henry',numerals = defaultNumeral){
//     let defaultNumeral = 'VIII';
//     return `King ${name} ${numerals}`;
// }

// let values = [1, 2, 3, 4];
// function getSum() {
//  let sum = 0;
//  for (let i = 0; i < arguments.length; ++i) {
//  sum += arguments[i];
//  }
//  return sum;
// }
// // console.log(getSum.apply(null, values)); // 10
// //扩展操作符
// console.log(getSum(...values));

// console.log(getSum(-1,...values));
// console.log(getSum(...values,6));
// console.log(getSum(-1,...values,5));
// console.log(getSum(...values,...[1,2,3,4,5,6]));

// function getProduct(a,b,c = 1){
//     return a * b * c;
// }

// let getSum = (a,b,c = 0) => {
//     return a + b + c;
// }

// console.log(getProduct(...[1,2]));
// console.log(getProduct(...[1,2,3]));
// console.log(getProduct(...[1,2,3,4]));

// console.log(getSum(...[0,1]));
// console.log(getSum(...[0,1,2]));
// console.log(getSum(...[0,1,2,3]));

// function getSum(...value){
//     return value.reduce((x,y = 0) => x + y);
// }
// console.log(getSum(1,2,3));

// 收集参数的前面如果还有命名参数，则只会收集其余的参数；如果没有则会得到空数组。因为收集
// 参数的结果可变，所以只能把它作为最后一个参数
//应该把剩余参数放到后面因为它才知道要根据前面的值取几个

// function getProduct(lastValue,...values){
//     console.log(values);
// }

// getProduct();
// getProduct(1);
// getProduct(1,2);
// getProduct(1,2,3);

// 箭头函数虽然不支持 arguments 对象，但支持收集参数的定义方式，因此也可以实现与使用
// arguments 一样的逻辑：
// let getSum = (...values) => {
//  return values.reduce((x, y) => x + y, 0);
// }
// console.log(getSum(1,2,3)); // 6

//函数声明与函数表达式

//没问题
// console.log(num(10,10));
// function sum(num1,num2){
//     return num1+num2;
// }

//有问题
// console.log(nums(10,10));
// let nums = (num3,num4) => {
//     return num3+num4;
// };

// 上面的代码之所以会出错，是因为这个函数定义包含在一个变量初始化语句中，而不是函数声明中。
// 这意味着代码如果没有执行到加粗的那一行，那么执行上下文中就没有函数的定义，所以上面的代码会
// 出错。这并不是因为使用 let 而导致的，使用 var 关键字也会碰到同样的问题

// 因为函数名在 ECMAScript 中就是变量，所以函数可以用在任何可以使用变量的地方。这意味着不
// 仅可以把函数作为参数传给另一个函数，而且还可以在一个函数中返回另一个函数。

// function callSomeFuntion(someFuntion,someArgument){
//     return someFuntion(someArgument);
// }

// function add10(num){
//     return num+10;
// }

// let result = callSomeFuntion(add10,10);
// console.log(result);

// function getGreeting(name){
//     return "Hello, " + name;
// }
// let result2 = callSomeFuntion(getGreeting,"sb");
// console.log(result2);

// function getGreet(propertyName){
//     return function(object1,object2){
//         let s1 = object1[propertyName];
//         let s2 = object2[propertyName];

//         if(s1 < s2){
//             return -1;
//         }else if(s1 > s2){
//             return 1;
//         }else{
//             return 0;
//         }
//     };
// }
// let data = [
//     {name:"Zachary",age:28},
//     {name:"Nicholas",age:29}
// ];

// data.sort(getGreet("name"));
// console.log(data[0].name);
// data.sort(getGreet("age"));
// console.log(data[0].name);

//arguments
// callee 属性，是一个指向 arguments 对象所在函数的
// // 指针
// function factorial(num){
//     if(num<=1){
//         return 1;
//     }else{
//         return num*arguments.callee(num-1);
//     }
// }
// let trueFactorial = factorial;
// factorial = function(){
//     return 0;
// };

// console.log(trueFactorial(114));
// console.log(factorial(5));

//this

// window.color = 'red';
// let o = {
//  color: 'blue'
// };
// function sayColor() {
//  console.log(this.color);
// }
// sayColor(); // 'red'
// o.sayColor = sayColor;
// o.sayColor(); // 'blue'
// 定义在全局上下文中的函数 sayColor()引用了 this 对象。这个 this 到底引用哪个对象必须到
// 函数被调用时才能确定。因此这个值在代码执行的过程中可能会变。如果在全局上下文中调用
// sayColor()，这结果会输出"red"，因为 this 指向 window，而 this.color 相当于 window.color。
// 而在把 sayColor()赋值给 o 之后再调用 o.sayColor()，this 会指向 o，即 this.color 相当于
// o.color，所以会显示"blue"。

// function King() {
//   this.royaltyName = "Henry";
//   // this 引用 King 的实例
//   setTimeout(() => console.log(this.royaltyName), 1000);
// }
// function Queen() {
//   this.royaltyName = "Elizabeth";
//   // this 引用 window 对象
//   setTimeout(function () {
//     console.log(this.royaltyName);
//   }, 1000);
// }
// new King(); // Henry
// new Queen(); // undefined

//caller

// function outer(){
//     inner();
// }
// function inner(){
//     console.log(inner.caller);
// }
//  outer();
// 以上代码会显示 outer()函数的源代码。这是因为 ourter()调用了 inner()，inner.caller
// 指向 outer()。如果要降低耦合度，则可以通过 arguments.callee.caller 来引用同样的值：
// function outer() {
//     inner();
//    }
//    function inner() {
//     console.log(arguments.callee.caller);
//    }
//    outer();

//new.target

// ECMAScript 中的函数始终可以作为构造函数实例化一个新对象，也可以作为普通函数被调用。
// ECMAScript 6 新增了检测函数是否使用 new 关键字调用的 new.target 属性。
// function King() {
//     if (!new.target) {
//     throw 'King must be instantiated using "new"'
//     }
//     console.log('King instantiated using "new"');
//    }
//    new King(); // King instantiated using "new"
//    King(); // Error: King must be instantiated using "new"

//函数属性与方法
//length 属性保存函数定义的命名参数的个数
// function sayName(name) {
//     console.log(name);
//    }
//    function sum(num1, num2) {
//     return num1 + num2;
//    }
//    function sayHi() {
//     console.log("hi");
//    }
//    console.log(sayName.length); // 1
//    console.log(sum.length); // 2
//    console.log(sayHi.length); // 0
// ECMAScript 5
// 中，prototype 属性是不可枚举的，因此使用 for-in 循环不会返回这个属性。

// 函数还有两个方法：apply()和 call()。
//apply()
// 第二个参数可以是 Array 的实例，但也可以是 arguments 对象
// function sum(num1,num2){
//     return num1+num2;
// }
// function callSum1(num1,num2){
//     return sum.apply(this,arguments);
// }
// function callSum2(num1,num2){
//     return sum.apply(this,[num1,,num2]);
// }
// console.log(callSum1(10,10));
// console.log(callSum2(10,10));
// 在严格模式下，调用函数时如果没有指定上下文对象，则 this 值不会指向 window。
// 除非使用 apply()或 call()把函数指定给一个对象，否则 this 的值会变成 undefined。

// call()方法与 apply()的作用一样，只是传参的形式不同。第一个参数跟 apply()一样，也是 this
// 值，而剩下的要传给被调用函数的参数则是逐个传递的。换句话说，通过 call()向函数传参时，必须
// 将参数一个一个地列出来，比如：
// function sum(num1, num2) {
//  return num1 + num2;
// }
// function callSum(num1, num2) {
//  return sum.call(this, num1, num2);
// }
// console.log(callSum(10, 10)); // 20

// apply()和 call()真正强大的地方并不是给函数传参，而是控制函数调用上下文即函数体内 this
// 值的能力。考虑下面的例子：
// window.color = 'red';
// let o = {
//  color: 'blue'
// };
// function sayColor() {
//  console.log(this.color);
// }
// sayColor(); // red
// sayColor.call(this); // red
// sayColor.call(window); // red
// sayColor.call(o); // blue
// 这个例子是在之前那个关于 this 对象的例子基础上修改而成的。同样，sayColor()是一个全局
// 函数，如果在全局作用域中调用它，那么会显示"red"。这是因为 this.color 会求值为 window.color。
// 如果在全局作用域中显式调用 sayColor.call(this)或者 sayColor.call(window)，则同样都会显
// 示"red"。而在使用 sayColor.call(o)把函数的执行上下文即 this 切换为对象 o 之后，结果就变成
// 了显示"blue"了。
// 使用 call()或 apply()的好处是可以将任意对象设置为任意函数的作用域，这样对象可以不用关
// 心方法。在前面例子最初的版本中，为切换上下文需要先把 sayColor()直接赋值为 o 的属性，然后再
// 调用。而在这个修改后的版本中，就不需要这一步操作了。
// ECMAScript 5 出于同样的目的定义了一个新方法：bind()。bind()方法会创建一个新的函数实例，
// 其 this 值会被绑定到传给 bind()的对象。比如

// window.color = 'red';
// var o = {
//     color:'blue'
// };
// function sayColor(){
//     console.log(this.color);
// }
// let objectSayColor = sayColor.bind(0);
// objectSayColor();

//函数声明与表达式
// let functionName = function(arg0, arg1, arg2) {
//     // 函数体
//    };
//函数表达式看起来就像一个普通的变量定义和赋值，即创建一个函数再把它赋值给一个变量
// functionName。这样创建的函数叫作匿名函数（anonymous funtion）
//匿名函数有也时候也被称为兰姆达函数

// //递归
// 递归函数通常的形式是一个函数通过名称调用自己，如下面的例子所示：
// function factorial(num) {
//   if (num <= 1) {
//     return 1;
//   } else {
//     return num * factorial(num - 1);
//   }
// }
// 这是经典的递归阶乘函数。虽然这样写是可以的，但如果把这个函数赋值给其他变量，就会出问题：
// let anotherFactorial = factorial;
// factorial = null;
// console.log(anotherFactorial(4)); // 报错
// 这里把 factorial()函数保存在了另一个变量 anotherFactorial 中，然后将 factorial 设置
// 为 null，于是只保留了一个对原始函数的引用。而在调用 anotherFactorial()时，要递归调用
// factorial()，但因为它已经不是函数了，所以会出错。在写递归函数时使用 arguments.callee 可
// 以避免这个问题。
// arguments.callee 就是一个指向正在执行的函数的指针，因此可以在函数内部递归调用，如下
// 所示：
// function factorial(num) {
//   if (num <= 1) {
//     return 1;
//   } else {
//     return num * arguments.callee(num - 1);
//   }
// }
// 在严格模式下运行的代码是不能访问 arguments.callee 的，因为访问会出错。此时，可
// 以使用命名函数表达式（named function expression）达到目的。比如：
// const factorial = (function f(num) { 
//  if (num <= 1) { 
//  return 1; 
//  } else { 
//  return num * f(num - 1); 
//  } 
// });
// console.log(factorial(4));




// 尾调用优化的条件
// 下面是几个符合尾调用优化条件的例子：
// "use strict"; 
// // 有优化：栈帧销毁前执行参数计算
// function outerFunction(a, b) { 
//  return innerFunction(a + b); 
// } 
// // 有优化：初始返回值不涉及栈帧
// function outerFunction(a, b) { 
//  if (a < b) { 
//  return a; 
//  } 
//  return innerFunction(a + b); 
// } 
// // 有优化：两个内部函数都在尾部
// function outerFunction(condition) { 
//  return condition ? innerFunctionA() : innerFunctionB(); 
// }
//简单的斐波那契
// function fib(n){
//     if(n < 2){
//         return n;
//     }
//     return fib(n-1) + fib(n-2);
// }

// console.log(fib(11));
// 显然这个函数不符合尾调用优化的条件，因为返回语句中有一个相加的操作。结果，fib(n)的栈
// 帧数的内存复杂度是 O(2n
// )。
//尾调优化后的代码
// function fib(n){
//     return fibImp(0,1,n);
// }

// function fibImp(a,b,n){
//     if(n === 0){
//         return a;
//     }
//     return fibImp(b,a+b,n-1);
// }

// console.log(fib(1000));

// 它类似于函数声明，但由于被包含在括号中，所以会被解释为函数表达式。紧跟在第一组
// 括号后面的第二组括号会立即调用前面的函数表达式。
//立即调用的函数表达式
// (function(){
//     //块级作用域
// })();

//内嵌块级作用域
// {
//     let i;
//     for(i = 0;i<countBy;i++){
//         console.log(i);
//     }
// }
// console.log(i); //抛出错误

// 循环的块级作用域
// for (let i = 0; i < count; i++) { 
//     console.log(i); 
//    } 
//    console.log(i); // 抛出错误

