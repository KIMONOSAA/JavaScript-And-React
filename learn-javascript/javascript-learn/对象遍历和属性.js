// 当涉及到对象的遍历和属性操作时，JavaScript 提供了一些有用的语法和方法。让我为您逐一解释它们的含义：

// 1. `for-in` 循环：
//    `for-in` 循环用于遍历对象的可枚举属性。它会迭代对象的所有可枚举属性，包括从原型链继承的属性。每次迭代，变量将被设置为当前属性的键，可以使用该键来访问属性的值。以下是 `for-in` 循环的语法示例：

//    ```javascript
//    for (var key in object) {
//      if (object.hasOwnProperty(key)) {
//        // 执行对属性的操作
//      }
//    }
//    ```

//    在循环内部，通常会使用 `hasOwnProperty` 方法来检查属性是否属于对象本身而不是继承自原型。

// 2. `Object.keys()`：
//    `Object.keys()` 方法返回一个包含对象自身可枚举属性的数组。它返回的是对象属性的键（字符串）组成的数组，不包括继承的属性。以下是 `Object.keys()` 的使用示例：

//    ```javascript
//    var obj = { a: 1, b: 2, c: 3 };
//    var keys = Object.keys(obj);
//    console.log(keys);  // 输出: ["a", "b", "c"]
//    ```

//    `Object.keys()` 方法对于遍历对象的属性或进行属性操作非常有用。

// 3. `Object.getOwnPropertyNames()`：
//    `Object.getOwnPropertyNames()` 方法返回一个包含对象自身所有属性的数组，包括可枚举和不可枚举属性。它返回的是对象属性的键（字符串）组成的数组，不包括继承的属性。以下是 `Object.getOwnPropertyNames()` 的使用示例：

//    ```javascript
//    var obj = { a: 1, b: 2, c: 3 };
//    var propertyNames = Object.getOwnPropertyNames(obj);
//    console.log(propertyNames);  // 输出: ["a", "b", "c"]
//    ```

//    `Object.getOwnPropertyNames()` 方法对于获取对象的所有属性，包括不可枚举属性，非常有用。

// 4. `Object.getOwnPropertySymbols()`：
//    `Object.getOwnPropertySymbols()` 方法返回一个包含对象自身所有符号属性的数组。符号属性是 ES6 引入的一种特殊类型的属性，其键是符号（Symbol）类型。以下是 `Object.getOwnPropertySymbols()` 的使用示例：

//    ```javascript
//    var sym = Symbol("description");
//    var obj = { [sym]: 1 };
//    var symbols = Object.getOwnPropertySymbols(obj);
//    console.log(symbols);  // 输出: [Symbol(description)]
//    ```

//    `Object.getOwnPropertySymbols()` 方法对于获取对象的符号属性非常有用。

// 5. `Object.assign()`：
//    `Object.assign()` 方法用于将一个或多个源对象的属性复制到目标对象中。它会返回目标对象。如果多个源对象具有相同的属性，则后面的源对象会覆盖前面的源对象的属性。以下是 `Object.assign()` 的使用示例：

//    ```javascript


//    var target = { a: 1 };
//    var source = { b: 2 };
//    Object.assign(target, source);
//    console.log(target);  // 输出: { a: 1, b: 2 }
//    ```

//    `Object.assign()` 方法在对象的合并、克隆和属性覆盖等场景中非常有用。

// 这些语法和方法提供了灵活和方便的方式来操作对象的属性，遍历属性以及进行属性的复制和合并。根据具体的需求，您可以选择适当的方法来操作和处理对象的属性。