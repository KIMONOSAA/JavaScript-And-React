//原型的问题
// function Person() {}
// Person.prototype = {
//   constructor: Person,
//   name: "Nicholas",
//   age: 29,
//   job: "Software Engineer",
//   friends: ["Shelby", "Court"],
//   sayName() {
//     console.log(this.name);
//   },
// };
// let person1 = new Person();
// let person2 = new Person();
// let person3 = new Person();
// person1.friends.push("Van");
// person1.age = 30;
// person2.age = 77;
// console.log(person1.friends); // "Shelby,Court,Van"
// console.log(person2.friends); // "Shelby,Court,Van"
// console.log(person1.age);
// console.log(person2.age);
// console.log(person3.age);

// console.log(person1.friends === person2.friends); // true
// console.log(person1.age === person2.age);
// console.log(person1.age === person3.age);

//上面这段代码证明了什么？？我们知道原型上的所有属性在实例上是可以共享的，仔细一看你会发现
//这对函数来说，原始值来说都比较合适的，但是真正的问题是什么是原型在引用值得属性时
//会有问题就上面的代码来说已知friends是数组他是个引用值当我们给实例的引用值加上“van”
//的时候打印出来的竟然是"Shelby,Court,Van"说明什么？引用值可以改变原型的属性，这就出大问题了

// 继承
// 继承是面向对象编程中讨论最多的话题。很多面向对象语言都支持两种继承：接口继承和实现继承。
// 前者只继承方法签名，后者继承实际的方法。接口继承在 ECMAScript 中是不可能的，因为函数没有签
// 名。实现继承是 ECMAScript 唯一支持的继承方式，而这主要是通过原型链实现的。
//  原型链
// ECMA-262 把原型链定义为 ECMAScript 的主要继承方式。其基本思想就是通过原型继承多个引用
// 类型的属性和方法。重温一下构造函数、原型和实例的关系：每个构造函数都有一个原型对象，原型有
// 一个属性指回构造函数，而实例有一个内部指针指向原型。如果原型是另一个类型的实例呢？那就意味
// 着这个原型本身有一个内部指针指向另一个原型，相应地另一个原型也有一个指针指向另一个构造函
// 数。这样就在实例和原型之间构造了一条原型链。这就是原型链的基本构想。//
//不懂可以看书js高级程序设计里面有图

//原型链也有问题跟原型的问题相似。

// 这句话指的是盗用构造函数模式的主要缺点和限制。

// 盗用构造函数模式是一种在子类构造函数中调用父类构造函数的方法，以继承父类的属性。
// 然而，它也有一些问题：

// 方法无法重用：在盗用构造函数模式中，方法必须在构造函数中定义。
// 这意味着每个实例都会创建一个新的方法副本，无法实现方法的重用。
// 如果多个实例需要执行相同的逻辑，就会导致代码冗余。

// 无法访问父类原型上的方法：盗用构造函数模式只能继承父类构造函数中定义的属性，
// 而无法访问父类原型（prototype）上定义的方法。
// 这意味着子类无法共享和继承父类原型上的方法，导致代码的可复用性受限。

//组合继承
// 组合继承
// 组合继承（有时候也叫伪经典继承）综合了原型链和盗用构造函数，将两者的优点集中了起来。基
// 本的思路是使用原型链继承原型上的属性和方法，而通过盗用构造函数继承实例属性。这样既可以把方
// 法定义在原型上以实现重用，又可以让每个实例都有自己的属性。
// function SuperType(name) {
//   this.name = name;
//   this.colors = ["red", "blue", "green"];
// }
// SuperType.prototype.sayName = function () {
//   console.log(this.name);
// };
// function SubType(name, age) { //运用了盗用构造函数
//   // 继承属性
//   SuperType.call(this, name);
// }
// // 继承方法
// SubType.prototype = new SuperType(); //运用了原型链

// let instance1 = new SubType("Nicholas");
// instance1.colors.push("black");
// console.log(instance1.colors); // "red,blue,green,black"
// instance1.sayName(); // "Nicholas";
// let instance2 = new SubType("Greg");
// console.log(instance2.colors); // "red,blue,green"
// instance2.sayName(); // "Greg";
// 组合继承弥补了原型链和盗用构造函数的不足，是 JavaScript 中使用最多的继承模式。而且组合继
// 承也保留了 instanceof 操作符和 isPrototypeOf()方法识别合成对象的能力。

//原型式继承
// let person = {
//     name: "Nicholas",
//     friends: ["Shelby", "Court", "Van"]
//    };
//    let anotherPerson = Object.create(person, {
//     name: {
//     value: "Greg"
//     }

//    });
//    console.log(anotherPerson.name); // "Greg"
//    console.log(person.friends);

//寄生式继承
// function inheritPrototype(subType, superType) {
//   let prototype = object(superType.prototype); // 创建对象
//   prototype.constructor = subType; // 增强对象
//   subType.prototype = prototype; // 赋值对象
// }
// function SuperType(name) {
//   this.name = name;
//   this.colors = ["red", "blue", "green"];
// }
// SuperType.prototype.sayName = function () {
//   console.log(this.name);
// };
// function SubType(name, age) {
//   SuperType.call(this, name);
//   this.age = age;
// }
// inheritPrototype(SubType, SuperType);
// SubType.prototype.sayAge = function () {
//   console.log(this.age);
// };

