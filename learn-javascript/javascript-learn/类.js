// 与函数表达式类似，类表达式在它们被求值前也不能引用。不过，与函数定义不同的是，
// 虽然函数
// 声明可以提升，但类定义不能
// 另一个跟函数声明不同的地方是，函数受函数作用域限制，而类受块作用域限制
// 函数声明
// console.log(foo); // 输出: [Function: foo]
// foo(); // 输出: "Hello from foo!"

// function foo() {
//   console.log("Hello from foo!");
// }

// // 类定义
// console.log(bar); // 输出: ReferenceError: bar is not defined
// bar(); // 输出: TypeError: bar is not a function

// {
//   class bar {
//     sayHello() {
//       console.log("Hello from bar!");
//     }
//   }
// }

// class Person { 
//     constructor(age) { 
//     this.age_ = age; 
//     } 
//     sayAge() { 
//     console.log(this.age_); 
//     } 
//     static create() { 
//     // 使用随机年龄创建并返回一个 Person 实例
//     return new Person(Math.floor(Math.random()*100)); 
//     } 
//    } 
//    console.log(Person.create()); // Person { age_: ... }

// 一个策略是定义一组“可嵌套”的函数，每个函数分别接收一个超类作为参数，而将混入类定义为
// 这个参数的子类，并返回这个类。这些组合函数可以连缀调用，最终组合成超类表达式：
// class Vehicle {} 
// let FooMixin = (Superclass) => class extends Superclass { 
//  foo() { 
//  console.log('foo'); 
//  } 
// }; 
// let BarMixin = (Superclass) => class extends Superclass { 
//  bar() { 
//  console.log('bar'); 
//  } 
// }; 
// let BazMixin = (Superclass) => class extends Superclass { 
//  baz() { 
//  console.log('baz'); 
//  } 
// }; 
// class Bus extends FooMixin(BarMixin(BazMixin(Vehicle))) {} 
// let b = new Bus(); 
// b.foo(); // foo 
// b.bar(); // bar 
// b.baz(); // baz
// 通过写一个辅助函数，可以把嵌套调用展开：
// class Vehicle {} 
// let FooMixin = (Superclass) => class extends Superclass { 
//  foo() { 
//  console.log('foo'); 
//  } 
// }; 
// let BarMixin = (Superclass) => class extends Superclass { 
//  bar() { 
//  console.log('bar'); 
//  } 
// }; 
// let BazMixin = (Superclass) => class extends Superclass { 
//  baz() { 
//  console.log('baz'); 
//  } 
// }; 
// function mix(BaseClass, ...Mixins) { 
//  return Mixins.reduce((accumulator, current) => current(accumulator), BaseClass); 
// } 
// class Bus extends mix(Vehicle, FooMixin, BarMixin, BazMixin) {} 
// let b = new Bus(); 
// b.foo(); // foo 
// b.bar(); // bar 
// b.baz(); // baz

