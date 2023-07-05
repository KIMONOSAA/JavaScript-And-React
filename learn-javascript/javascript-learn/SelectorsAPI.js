// querySelector()
// // 取得类名为"selected"的第一个元素
// let selected = document.querySelector(".selected"); 
// // 取得类名为"button"的图片
// let img = document.body.querySelector("img.button"); 
// 在 Document 上使用 querySelector()方法时，会从文档元素开始搜索；在 Element 上使用
// querySelector()方法时，则只会从当前元素的后代中查询。
// 用于查询模式的 CSS 选择符可繁可简，依需求而定。如果选择符有语法错误或碰到不支持的选择符，
// 则 querySelector()方法会抛出错误。


// querySelectorAll()
// querySelectorAll()方法跟 querySelector()一样，也接收一个用于查询的参数，但它会返回
// 所有匹配的节点，而不止一个。这个方法返回的是一个 NodeList 的静态实例。
// 再强调一次，querySelectorAll()返回的 NodeList 实例一个属性和方法都不缺，但它是一
// 个静态的“快照”，而非“实时”的查询。这样的底层实现避免了使用 NodeList 对象可能造成的性
// 能问题。

