//object
// 有两种创造方法1.第一种是new2.第二种是object

const { property } = require("lodash");

//  let person = new Object();
//  person.name = "Nicholas";
//  person.age = 20;

// //  第二种
//  let person = {
//     name: "Nicholas",
//     age: 29
// //    };
// console.log(person["name"]);
// console.log(person.name);

// 2.Array

// let colose = new Array();
// let ss = new Array();

// const iter = {
//     *[Symbol.iterator]() {
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     }
//    };
//    console.log(Array.from(iter)); // [1, 2, 3, 4]

// 调用 Array.from().map()那样先创建一个中间数组。还可以接收第三个可选参数，用于指定映射函
// 数中 this 的值。但这个重写的 this 值在箭头函数中不适用。
// const a1 = [1, 2, 3, 4];
// const a2 = Array.from(a1, x => x**2);
// const a3 = Array.from(a1, function(x) {return x**this.exponent}, {exponent: 2});
// console.log(a2); // [1, 4, 9, 16]
// console.log(a3); // [1, 4, 9, 16]
// Array.of()可以把一组参数转换为数组。这个方法用于替代在 ES6之前常用的 Array.prototype.
// slice.call(arguments)，一种异常笨拙的将 arguments 对象转换为数组的写法：
// console.log(Array.of(1, 2, 3, 4)); // [1, 2, 3, 4]
// console.log(Array.of(undefined)); // [undefined]

//concat() 可以将现有的所有数组全部元素基础上创建一个新的数组
// let colose = ["red","green","blue"];
// let colose2 = colose.concat("yellow",["black","brown"]);

// console.log(colose);
// console.log(colose2);

//splice在数组中间插入元素
//方式一：删除，需要给splice传2个：要删除的第一个元素的位置和要删除的元素数量
//方式二：插入需要给 splice()传 3 个参数：开始位置、0（要删除的元素数量）和要插入的元素，可
// 以在数组中指定的位置插入元素。
//方式三：替换splice()在删除元素的同时可以在指定位置插入新元素，同样要传入 3 个参数：开始位
// 置、要删除元素的数量和要插入的任意多个元素。
// let colors = ["red", "green", "blue"];
// let removed = colors.splice(0,1); // 删除第一项
// alert(colors); // green,blue
// alert(removed); // red，只有一个元素的数组
// removed = colors.splice(1, 0, "yellow", "orange"); // 在位置 1 插入两个元素
// alert(colors); // green,yellow,orange,blue
// alert(removed); // 空数组
// removed = colors.splice(1, 1, "red", "purple"); // 插入两个值，删除一个元素
// alert(colors); // green,red,purple,orange,blue
// alert(removed);

// ECMAScript 提供了 3 个严格相等的搜索方法：indexOf()、lastIndexOf()和 includes()。其
// 中，前两个方法在所有版本中都可用，而第三个方法是 ECMAScript 7 新增的。这些方法都接收两个参
// 数：要查找的元素和一个可选的起始搜索位置。indexOf()和 includes()方法从数组前头（第一项）
// 开始向后搜索，而 lastIndexOf()从数组末尾（最后一项）开始向前搜索。
// indexOf()和 lastIndexOf()都返回要查找的元素在数组中的位置，如果没找到则返回1。
// includes()返回布尔值，表示是否至少找到一个与指定元素匹配的项。在比较第一个参数跟数组每一
// 项时，会使用全等（===）比较，也就是说两项必须严格相等。下面来看一些例子：
// let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
// alert(numbers.indexOf(4)); // 3
// alert(numbers.lastIndexOf(4)); // 5
// alert(numbers.includes(4)); // true
// alert(numbers.indexOf(4, 4)); // 5
// alert(numbers.lastIndexOf(4, 4)); // 3
// alert(numbers.includes(4, 7)); // false
// let person = { name: "Nicholas" };
// let people = [{ name: "Nicholas" }];
// let morePeople = [person];
// alert(people.indexOf(person)); // -1
// alert(morePeople.indexOf(person)); // 0
// alert(people.includes(person)); // false
// alert(morePeople.includes(person)); // true

// 迭代方法
// let numbers = [1,2,3,4,5,6,7,8,9,10];
// //every(数组里所有都大于1的话返回true否则false)
// let everyResult = numbers.every((item,index,array) => item > 2);
// console.log(everyResult);
// //every(数组里如果有一个大于1的话返回true否则false)
// let someResult = numbers.some((item,index,array) => item > 2);
// console.log(someResult);
// //filter()
// let filResult = numbers.filter((item,index,array) => item > 2);
// console.log(filResult);
// //map()
// // 接下来 map()方法也会返回一个数组。这个数组的每一项都是对原始数组中同样位置的元素运行传
// // 入函数而返回的结果。例如，可以将一个数组中的每一项都乘以 2，并返回包含所有结果的数组，如下
// // 所示：
// let numbersk = [1, 2, 3, 4, 5, 4, 3, 2, 1];
// let mapResult = numbersk.map((item, index, array) => item * 2);
// // alert(mapResult); // 2,4,6,8,10,8,6,4,2
// // 最后，再来看一看 forEach()方法。这个方法只会对每一项运行传入的函数，没有返回值。本质
// // 上，forEach()方法相当于使用 for 循环遍历数组。比如：
// let numbersv = [1, 2, 3, 4, 5, 4, 3, 2, 1];
// numbersv.forEach((item, index, array) => {
//  // 执行某些操作
// });
// 数组的这些迭代方法通过执行不同操作方便了对数组的处理。

//归并方法
//reduce() reduce()方法从数组第一项开始遍历到最后一项。
// reduceRight()从最后一项开始遍历至第一项。

// 6.3 定型数组
// 定型数组（typed array）是 ECMAScript 新增的结构，目的是提升向原生库传输数据的效率。实际上，
// JavaScript 并没有“TypedArray”类型，它所指的其实是一种特殊的包含数值类型的数组。为理解如何使
// 用定型数组，有必要先了解一下它的用途。

// 2. 字节序
// 前面例子中的缓冲有意回避了字节序的问题。“字节序”指的是计算系统维护的一种字节顺序的约
// 定。DataView 只支持两种约定：大端字节序和小端字节序。大端字节序也称为“网络字节序”，意思
// 是最高有效位保存在第一个字节，而最低有效位保存在最后一个字节。小端字节序正好相反，即最低有
// 效位保存在第一个字节，最高有效位保存在最后一个字节。
// JavaScript 运行时所在系统的原生字节序决定了如何读取或写入字节，但 DataView 并不遵守这
// 个约定。对一段内存而言，DataView 是一个中立接口，它会遵循你指定的字节序。DataView 的所
// 有 API 方法都以大端字节序作为默认值，但接收一个可选的布尔值参数，设置为 true 即可启用小端
// 字节序。

// 1. `copyWithin(target, start, end)`
//    - 这个方法会将数组内指定范围的元素复制到数组的另一个位置。
//    - 参数 `target` 是复制的目标位置，`start` 是复制的起始位置，`end` 是复制的结束位置（可选）。

// 2. `entries()`
//    - 这个方法返回一个数组迭代器对象，该迭代器包含数组中每个元素的键值对。

// 3. `every(callback)`
//    - 这个方法用于检测数组中的所有元素是否都满足给定的条件（通过回调函数）。
//    - 如果数组中的每个元素都满足条件，则返回 `true`，否则返回 `false`。

// 4. `fill(value, start, end)`
//    - 这个方法将数组中指定范围内的所有元素替换为指定的值。
//    - 参数 `value` 是要替换的值，`start` 是替换的起始位置，`end` 是替换的结束位置（可选）。

// 5. `filter(callback)`
//    - 这个方法用于创建一个新数组，其中包含通过给定回调函数测试的所有元素。
//    - 只有满足回调函数条件的元素才会被包含在新数组中。

// 6. `find(callback)`
//    - 这个方法返回数组中满足给定回调函数的第一个元素的值。
//    - 如果找到满足条件的元素，则返回该元素的值；如果没有找到，则返回 `undefined`。

// 7. `findIndex(callback)`
//    - 这个方法返回数组中满足给定回调函数的第一个元素的索引。
//    - 如果找到满足条件的元素，则返回该元素的索引；如果没有找到，则返回 -1。

// 8. `forEach(callback)`
//    - 这个方法用于对数组中的每个元素执行指定操作（通过回调函数）。
//    - 它没有返回值，而是直接对每个元素执行操作。

// 9. `indexOf(searchElement, fromIndex)`
//    - 这个方法返回数组中指定元素首次出现的索引。
//    - 参数 `searchElement` 是要搜索的元素，`fromIndex` 是开始搜索的位置（可选）。

// 10. `join(separator)`
//     - 这个方法将数组中所有元素连接成一个字符串，并使用指定的分隔符分隔每个元素。
//     - 参数 `separator` 是用于分隔元素的字符串（可选，默认为逗号）。

// 11. `keys()`
//     - 这个方法返回一个数组迭代器对象，该迭代器包含数组中每个索引的键。

// 12. `lastIndexOf(searchElement, fromIndex)`
//     - 这个方法返回数组中指定元素最后一次出现的索引。
//     - 参数 `searchElement` 是要搜索的元素，`fromIndex` 是从数组末尾

// 开始搜索的位置（可选）。

// 13. `length`
//     - 这是数组的属性，表示数组中元素的数量。

// 14. `map(callback)`
//     - 这个方法创建一个新数组，其结果是通过给定回调函数对每个元素进行操作后的返回值。
//     - 新数组的元素是原始数组经过回调函数转换后的值。

// 15. `reduce(callback, initialValue)`
//     - 这个方法对数组中的所有元素执行一个归约操作，返回一个单一的值。
//     - 参数 `callback` 是用于执行归约操作的回调函数，`initialValue` 是可选的初始值。

// 16. `reduceRight(callback, initialValue)`
//     - 这个方法与 `reduce()` 相似，但是从数组的最后一个元素开始向前执行归约操作。

// 17. `reverse()`
//     - 这个方法用于反转数组中元素的顺序，将数组中的第一个元素变为最后一个，最后一个元素变为第一个。

// 18. `slice(start, end)`
//     - 这个方法返回一个新数组，其中包含原始数组中指定范围内的元素。
//     - 参数 `start` 是提取的起始位置，`end` 是提取的结束位置（可选）。

// 19. `some(callback)`
//     - 这个方法用于检测数组中的元素是否至少有一个满足给定的条件（通过回调函数）。
//     - 如果有至少一个元素满足条件，则返回 `true`；否则返回 `false`。

// 20. `sort(compareFunction)`
//     - 这个方法对数组中的元素进行排序，以便在原始数组上进行就地修改。
//     - 参数 `compareFunction` 是一个可选的比较函数，用于指定排序顺序。

// 21. `toLocaleString()`
//     - 这个方法返回一个表示数组元素的本地化字符串，元素使用各自的 `toLocaleString()` 方法转换为字符串。

// 22. `toString()`
//     - 这个方法将数组转换为一个字符串，并返回结果。

// 23. `values()`
//     - 这个方法返回一个数组迭代器对象，该迭代器包含数组中每个元素的值。

// 24. `concat()`
//    - 这个方法用于将两个或多个数组合并成一个新数组。
//    - 它不会修改原始数组，而是返回一个新数组，其中包含原始数组和要合并的数组的所有元素。

// 25. `pop()`
//    - 这个方法从数组中删除最后一个元素，并返回该元素的值。
//    - 它会修改原始数组，使其长度减少一位。

// 26. `push()`
//    - 这个方法将一个或多个元素添加到数组的末尾。
//    - 它会修改原始数组，并返回新的长度。

// 27. `shift()`
//    - 这个方法从数组中删除第一个元素，并返回该元素的值。
//    - 它会修改原始数组，使其长度减少一位，并且所有后续元素的索引会向前移动。

// 28. `splice(start, deleteCount, item1, item2, ...)`
//    - 这个方法用于从数组中添加或删除元素，并返回被删除的元素。
//    - 参数 `start` 是指定修改开始的位置，`deleteCount` 是要删除的元素个数，后续的参数 `item1, item2, ...` 是要添加到数组的新元素。

// 29. `unshift(item1, item2, ...)`
//    - 这个方法将一个或多个元素添加到数组的开头。
//    - 它会修改原始数组，并返回新的长度。

//顺序与迭代
// 映射实例可以提供一个迭代器（Iterator），能以插入顺序生成[key, value]形式的数组。可以
// 通过 entries()方法（或者 Symbol.iterator 属性，它引用 entries()）取得这个迭代器

// const m = new Map([["key1","val1"],["key2","val2"],["key3","val3"]]);

// console.log(m.entries === m[Symbol.iterator]);

// for (let pair of m.entries()) {
//     console.log(pair);
//    }

// for (let pair of m[Symbol.iterator]()) {
//     console.log(pair);
//    }

// ...m是一种扩展语法，它可以用在不同的场合，有不同的含义12。它可以表示：

// 扩展运算符（spread operator），它可以将一个可迭代对象（如数组、字符串、Map等）展开为用逗号分隔的参数序列。例如：let arr = [1, 2, 3]; let m = [...arr]; // m = [1, 2, 3]
// 剩余参数（rest parameter），它可以将一个不定数量的参数表示为一个数组。例如：function foo(...m) {console.log(m);} foo(1, 2, 3); // m = [1, 2, 3]
// 剩余元素（rest element），它可以将一个数组的剩余部分赋值给一个变量。例如：let [a, b, ...m] = [1, 2, 3, 4]; // m = [3, 4]
// const m = new Map([
//     ["key1", "val1"],
//     ["key2", "val2"],
//     ["key3", "val3"]
//    ]);
//    console.log([...m]);

// 也可以用回调方式，当然必须是可迭代对象
// forEach()
// const m = new Map([
//     ["key1","val1"],
//     ["key2","val2"],
//     ["key3","val3"]
// ]);

// m.forEach((val,key) => console.log(`${key} -> ${val}`));

//私有变量
// const User = (() => {
//     const wm = new WeakMap();

//     class User{
//         constructor(id){
//                 this.idProperty = Symbol('id');
//                 this.setId(id);
//         }
//         setPrivate(property,value){
//             const privateMembers = wm.get(this) || {};
//             privateMembers[property] = value;
//             wm.set(this,privateMembers);
//         }
//         getPrivate(property){
//             return wm.get(this)[property];
//         }
//         setId(id){
//             this.setPrivate(this.idProperty,id);
//         }
//         getId(id){
//             return this.getPrivate(this.idProperty);
//         }
//     }
//     return User;
// })();
// const user = new User(123);
// console.log(user.getId()); // 123
// user.setId(456);
// console.log(user.getId()); //

// set
// const s = new Set();
// console.log(s.has("Matt"));
// console.log(s.size);

// s.add("Matt")
//  .add("Frisbie");

// console.log(s.has("Matt"));
// console.log(s.size);

// s.delete("Matt");

// console.log(s.has("Matt"));
// console.log(s.has("Frisbie"));
// console.log(s.size);

// s.clear();

// console.log(s.has("Matt"));
// console.log(s.has("Frisbie"));
// console.log(s.size);
//用set来写交集，并集，差集，对称集，笛卡尔积，幂集
class XSet extends Set {
  union(...sets) {
    return XSet.union(this, ...sets);
  }
  intersection(...sets) {
    return XSet.intersection(this, ...sets);
  }
  difference(set) {
    return XSet.difference(this, set);
  }
  symmetricDifference(set) {
    return XSet.symmetricDifference(this, set);
  }
  cartesianProduct(set) {
    return XSet.cartesianProduct(this, set);
  }
  powerSet() {
    return XSet.powerSet(this);
  }
  // 返回两个或更多集合的并集
  static union(a, ...bSets) {
    const unionSet = new XSet(a);
    for (const b of bSets) {
      for (const bValue of b) {
        unionSet.add(bValue);
      }
    }
    return unionSet;
  }
  // 返回两个或更多集合的交集
  static intersection(a, ...bSets) {
    const intersectionSet = new XSet(a);
    for (const aValue of intersectionSet) {
      for (const b of bSets) {
        if (!b.has(aValue)) {
          intersectionSet.delete(aValue);
        }
      }
    }
    return intersectionSet;
  }
  // 返回两个集合的差集
  static difference(a, b) {
    const differenceSet = new XSet(a);
    for (const bValue of b) {
      if (a.has(bValue)) {
        differenceSet.delete(bValue);
      }
    }
    return differenceSet;
  }
  // 返回两个集合的对称差集
  static symmetricDifference(a, b) {
    // 按照定义，对称差集可以表达为
    return a.union(b).difference(a.intersection(b));
  }
  // 返回两个集合（数组对形式）的笛卡儿积
  // 必须返回数组集合，因为笛卡儿积可能包含相同值的对
  static cartesianProduct(a, b) {
    const cartesianProductSet = new XSet();
    for (const aValue of a) {
      for (const bValue of b) {
        cartesianProductSet.add([aValue, bValue]);
      }
    }
    return cartesianProductSet;
  }
  // 返回一个集合的幂集
  static powerSet(a) {
    const powerSet = new XSet().add(new XSet());
    for (const aValue of a) {
      for (const set of new XSet(powerSet)) {
        powerSet.add(new XSet(set).add(aValue));
      }
    }
    return powerSet;
  }
}
