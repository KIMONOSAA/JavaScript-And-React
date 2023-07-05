//字符串
//字符操作方法
//concat 将一个或多个字符串拼接成一个新的字符串
//concat（）方法可以接受任意多个
//但更常用的是+
// let stringValue = "hello ";
// let result = stringValue.concat("word");

// console.log(result);
// console.log(stringValue);
//字符串中提取字符串的方法，都接收一个或两个参数第一个是开始的位置，第二个数是结束位置
//slice() //第二个参数表示提取结束的位置
//substr() //返回表示返回的子字符串数量
//substring() //第二个参数表示提取结束的位置

// let stringValue = "hello word";
// console.log(stringValue.slice(3)); //
// console.log(stringValue.substring(3));
// console.log(stringValue.substr(3));
// console.log(stringValue.slice(3,7)); //
// console.log(stringValue.substring(3,7));
// console.log(stringValue.substr(3,7));
// let stringValue = "hello word";
// console.log(stringValue.slice(-3));
// console.log(stringValue.substring(-3));
// console.log(stringValue.substr(-3));
// console.log(stringValue.slice(3,-4));
// console.log(stringValue.substring(3,-4));
// console.log(stringValue.substr(3,-4));

//字符串位置方法
// let stringValue = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
// let postitions  = new Array();
// let pos = stringValue.indexOf("e");

// while(pos > -1)
// {
//     postitions.push(pos);
//     pos = stringValue.indexOf("e",pos+1);

// }

// console.log(postitions);

//字符串包含方法
// let stringValue = "hello world";

// console.log(stringValue.startsWith("llo"));
// console.log(stringValue.startsWith("he"));

// console.log(stringValue.endsWith("ld"));
// console.log(stringValue.endsWith("wor"));

// console.log(stringValue.includes("bar"));
// console.log(stringValue.includes("llo"));
//都有第二个可选参数
// let message = "foobarbaz";

// console.log(message.startsWith("foo"));
// console.log(message.startsWith("foo",4));

// console.log(message.includes("baz"));
// console.log(message.includes("baz",5));

// console.log(message.endsWith("bar"));
// console.log(message.endsWith("bar",6));


// //trim()方法
// ECMAScript 在所有字符串上都提供了 trim()方法。这个方法会创建字符串的一个副本，删除前、
// 后所有空格符

// repeat()方法
// ECMAScript 在所有字符串上都提供了 repeat()方法。这个方法接收一个整数参数，表示要将字
// 符串复制多少次，然后返回拼接所有副本后的结果。

// padStart()和 padEnd()方法
// padStart()和 padEnd()方法会复制字符串，如果小于指定长度，则在相应一边填充字符，直至
// 满足长度条件。这两个方法的第一个参数是长度，第二个参数是可选的填充字符串，默认为空格
// （U+0020）。

// let stringValue = "foo";

// console.log(stringValue.padStart(6));
// console.log(stringValue.padStart(9,"-"));

// console.log(stringValue.padEnd(6));
// console.log(stringValue.padEnd(9,"."));

// // 也可以这样
// console.log(stringValue.padStart(8,"bar"));
// console.log(stringValue.padStart(2));

// console.log(stringValue.padEnd(8,"bar"));
// console.log(stringValue.padEnd(2));


//字符串大小写转换
// let stringValue = "hello world";
// console.log(stringValue.toLocaleUpperCase());
// console.log(stringValue.toUpperCase());
// console.log(stringValue.toLocaleLowerCase());
// console.log(stringValue.toLowerCase());


//字符串模式的匹配方法
//match()
// String 类型专门为在字符串中实现模式匹配设计了几个方法。第一个就是 match()方法，这个方
// 法本质上跟 RegExp 对象的 exec()方法相同。match()方法接收一个参数，可以是一个正则表达式字
// 符串，也可以是一个 RegExp 对象.：
// let text = "cat, bat, sat, fat";

// let pattern = /.at/;

// let matches = text.match(pattern);
// console.log(matches.index);
// console.log(matches[0]);
// console.log(matches[1]);
// console.log(pattern.lastIndex);
//search()查找字符串的方法//返回模式第一个匹配的位置索引，没找到就返回-1；

// let text = "cat, bat, sat, fat"; 
// let pos = text.search(/at/); 
// console.log(pos);

//replace()方法 接受两个方式，第一个可以是regexp对象或者一个字符串，第二个参数可以是字符串或函数
// let text = "cat, bat, sat, fat";

// let result = text.replace("at","ond");
// console.log(result); 

// result = text.replace(/at/g,"ond");
// console.log(result);

// function htmlEscape(text) { 
//     return text.replace(/[<>"&]/g, function(match, pos, originalText) { 
//     switch(match) { 
//     case "<": 
//     return "&lt;"; 
//     case ">": 
//     return "&gt;"; 
//     case "&": 
//     return "&amp;"; 
//     case "\"": 
//     return "&quot;"; 
//     } 
//     }); 
//    } 
//    console.log(htmlEscape("<p class=\"greeting\">Hello world!</p>"));

///localecompare
//最后一个方法是比较两个字符串如果另一个字符串与本字符串的字母顺序在后面就返回1；
//如果相等 返回0，如果另一个字符串在前面的话返回-1
// let stringValue = "yellow";
// console.log(stringValue.localeCompare("brick"));
// console.log(stringValue.localeCompare("yellow"));
// console.log(stringValue.localeCompare("zoo"));

// function determineOrder(value){
//     let stringsValue = value;
//     let result = stringsValue.localeCompare(value);
//     if(result < 0){
//         console.log(`The string 'yellow' comes before the string '${value}'.`);
//     }else if(result > 0){
//         console.log(`the string 'yellow' comes before the string '${value}'.`);
//     }
//     else{
//         console.log(`the string 'yellow' is equal to the string '${value}'.`);
//     }
// }

// determineOrder("brick");
// determineOrder("yellow");
// determineOrder("zoo");


// URI方法 encodeURI()、用来加密（第一种不太行）
// encodeURIComponent()、也是一样用来加密（我说的加密是url中有特殊符号的都改成%20？等等）（这种比较好）
// decodeURI()和 decodeURI,Component()（这两个算是解密也是是跟上面两个相反）


//eval()
// let selectedOption = selectbox.options[selectbox.selectedIndex];
