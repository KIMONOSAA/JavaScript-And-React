// const target = {
//     id:'target'
// };

// const handler = {};

// const proxy = new Proxy(target,handler);

// //id 属性会访问同一个值

// console.log(target.id);
// console.log(proxy.id);
// target.id = 'foo';
// console.log(target.id);
// console.log(proxy.id);

// proxy.id = 'bar';
// console.log(target.id);
// console.log(proxy.id);

//定义捕获器
// //get()捕获器
// const target = {
//     foo:'bar'
// };
// const handler = {
//     get(){
//         return 'handler override';
//     }
// };

// const proxy = new Proxy(target,handler);


//proxy[property],proxy.property ,object.create(proxy)[property]
// 以上三种会触发基本的 get()操作以获取属性
// const target = {
//     foo:'bar'
// };

// const handler = {
//     get(){
//         return 'handler override';
//     }
// };

// const proxy = new Proxy(target,handler);

// console.log(target.foo);
// console.log(proxy.foo);

// console.log(target['foo']);
// console.log(proxy['foo']);


// console.log(object.create(target)['foo']);
// console.log(object.create(proxy)['foo']);

// 调用全局 Reflect 对象上（封装了原始行为）的同名方法来轻松重建。

// const target = {
//     foo:'bar'
// };
// const handler = {
//     get(){
//         return Reflect.get(...arguments);
//     }
// };

// const proxy = new Proxy(target,handler);

// console.log(proxy.foo);
// console.log(target.foo);

// 也可以这样
// const target ={
//     foo:'bar'
// };
// const proxy = new Proxy(target,Reflect);

// console.log(target['foo']);
// console.log(proxy['foo']);

// const target = {
//     foo:'bar',
//     baz:'qux'
// };

// const handler = {
//     get(trapTarget,property,erceiver){
//         let decoration = '';
//         if(property == 'foo'){
//             decoration = '!!!!';
//         }

//         return Reflect.get(...arguments) + decoration;
//     }
// };

// const proxy = new Proxy(target,handler);

// console.log(proxy.foo);
// console.log(target.foo);


// const target = {
//     foo:'bar'
// };

// const handler = {
//     get(){
//         return 'intercepted';
//     }
// };

// const { proxy, revoke } = Proxy.revocable(target,handler);

// console.log(proxy.foo);
// console.log(target.foo);

// revoke();

// console.log(proxy.foo);

// const hiddenProperties = ['foo','bar'];
// const targetObject = {
//     foo:1,
//     bar:2,
//     baz:3,
// };

// const proxy = new Proxy(targetObject,{
//     get(target,property){
//         if(hiddenProperties.includes(property)){
//             return undefined;
//         }else{
//             return Reflect.get(...arguments);
//         }
//     },
//     has(target,property){
//         if(hiddenProperties.includes(property)){
//             return false;
//         }else{
//             return Reflect.has(...arguments);
//         }
//     }
// });

// console.log(proxy.foo);
// console.log(proxy.bar);
// console.log(proxy.baz);

// console.log('foo' in proxy);
// console.log('bar' in proxy);
// console.log('baz' in proxy);

// const target = { 
//     onlyNumbersGoHere: 0 
//    }; 
//    const proxy = new Proxy(target, { 
//     set(target, property, value) { 
//     if (typeof value !== 'number') { 
//     return false; 
//     } else { 
//     return Reflect.set(...arguments); 
//     } 
//     } 
//    }); 
//    proxy.onlyNumbersGoHere = 1; 
//    console.log(proxy.onlyNumbersGoHere); // 1 
//    proxy.onlyNumbersGoHere = '3'; 
//    console.log(proxy.onlyNumbersGoHere); // 1

// 函数与构造函数参数验证

// function median(...nums){
//     return nums.sort()[Math.floor(nums.length / 2)];
// }
// const proxy = new Proxy(median,{
//     apply(target,thisArg,argumentsList){
//         for(const arg of argumentsList){
//             if(typeof arg !== 'number'){
//                 return 'Non-number argument provided';
//             }
//         }
//         return Reflect.apply(...arguments);
//     }
// });
// console.log(proxy(4, 7, 1)); // 4 
// console.log(proxy(4, '7', 1));



// 1. `construct(target, argumentsList, newTarget)`: 用于在代理对象作为构造函数被调用时进行拦截。它接收三个参数，分别是目标对象 `target`、构造函数的参数列表 `argumentsList` 和代理对象自身 `newTarget`。可以用来改变或拦截构造函数的行为。

// 2. `apply(target, thisArg, argumentsList)`: 用于在代理对象作为函数被调用时进行拦截。它接收三个参数，分别是目标对象 `target`、函数调用的 `this` 值 `thisArg` 和函数的参数列表 `argumentsList`。可以用来改变或拦截函数的调用行为。

// 3. `preventExtensions(target)`: 用于拦截对目标对象的 `Object.preventExtensions()` 操作。它接收目标对象 `target` 作为参数，并返回一个布尔值，指示是否允许对目标对象进行扩展。

// 4. `isExtensible(target)`: 用于拦截对目标对象的 `Object.isExtensible()` 操作。它接收目标对象 `target` 作为参数，并返回一个布尔值，指示目标对象是否可扩展。

// 5. `setPrototypeOf(target, prototype)`: 用于拦截对目标对象的 `Object.setPrototypeOf()` 操作。它接收目标对象 `target` 和新原型对象 `prototype` 作为参数，并返回一个布尔值，指示是否成功设置目标对象的原型。

// 6. `getPrototypeOf(target)`: 用于拦截对目标对象的 `Object.getPrototypeOf()` 操作。它接收目标对象 `target` 作为参数，并返回目标对象的原型。

// 7. `ownKeys(target)`: 用于拦截对目标对象的 `Object.getOwnPropertyNames()`、`Object.getOwnPropertySymbols()`、`Object.keys()` 和 `for...in` 等操作。它接收目标对象 `target` 作为参数，并返回一个由目标对象所有自身属性键组成的数组。

// 8. `deleteProperty(target, property)`: 用于拦截对目标对象的属性删除操作（使用 `delete` 运算符）。它接收目标对象 `target` 和要删除的属性名 `property` 作为参数，并返回一个布尔值，指示属性是否成功删除。

// 9. `getOwnPropertyDescriptor(target, property)`: 用于拦截对目标对象的属性描述符获取操作（使用 `Object.getOwnPropertyDescriptor()`）。它接收目标对象 `target` 和属性名 `property` 作为参数，并返回属性的描述符对象。

// 10. `defineProperty(target, property, descriptor)`: 用于拦截对目标对象的属性定义操作（使用 `Object.defineProperty()` 或 `Object.defineProperties()`）。它接收目标对象 `target`、属性名 `property` 和属性的描述符对象 `descriptor` 作为参数，并返回一个布尔值，

// 指示属性是否成功定义。

// 11. `has(target, property)`: 用于拦截对目标对象的属性存在性检查（使用 `property in object` 或 `object.hasOwnProperty(property)`）。它接收目标对象 `target` 和属性名 `property` 作为参数，并返回一个布尔值，指示属性是否存在于目标对象中。

// 12. `set(target, property, value, receiver)`: 用于拦截对目标对象的属性赋值操作。它接收目标对象 `target`、属性名 `property`、赋值的值 `value` 和最初被调用的对象 `receiver` 作为参数，并返回一个布尔值，指示属性是否成功赋值。

// 13. `get(target, property, receiver)`: 用于拦截对目标对象的属性访问操作。它接收目标对象 `target`、属性名 `property` 和最初被调用的对象 `receiver` 作为参数，并返回属性的值。
