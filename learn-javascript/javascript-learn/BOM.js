// let num = 0, intervalId = null; 
// let max = 10; 
// let incrementNumber = function() { 
//  num++; 
//  // 如果达到最大值，则取消所有未执行的任务
//  if (num == max) { 
//  clearInterval(intervalId); 
//  console.log("Done"); 
//  } 
// } 
// // intervalId = setInterval(incrementNumber, 500);

const { args } = require("commander");

// 第二种对话框叫确认框，通过调用 confirm()来显示。

// 最后一种对话框是提示框，通过调用 prompt()方法来显示。

// location 对象
// location.hash "#contents" URL 散列值（井号后跟零或多个字符），如果没有则
// 为空字符串
// location.host "www.wrox.com:80" 服务器名及端口号
// location.hostname "www.wrox.com" 服务器名
// location.href "http://www.wrox.com:80/WileyCDA/
// ?q=javascript#contents"
// 当前加载页面的完整 URL。location 的 toString()
// 方法返回这个值
// location.pathname "/WileyCDA/" URL 中的路径和（或）文件名
// location.port "80" 请求的端口。如果 URL中没有端口，则返回空字符串
// location.protocol "http:" 页面使用的协议。通常是"http:"或"https:"
// location.search "?q=javascript" URL 的查询字符串。这个字符串以问号开头
// location.username "foouser" 域名前指定的用户名
// location.password "barpassword" 域名前指定的密码
// location.origin "http://www.wrox.com" URL 的源地址。只读

// 查询字符串
// let qs = "?q=javascript&num=10"; 
// let searchParams = new URLSearchParams(qs); 
// alert(searchParams.toString()); // " q=javascript&num=10" 
// searchParams.has("num"); // true 
// searchParams.get("num"); // 10 
// searchParams.set("page", "3"); 
// alert(searchParams.toString()); // " q=javascript&num=10&page=3" 
// searchParams.delete("q"); 
// alert(searchParams.toString()); // " num=10&page=3"

// 大多数支持 URLSearchParams 的浏览器也支持将 URLSearchParams 的实例用作可迭代对象：
// let qs = "?q=javascript&num=10"; 
// let searchParams = new URLSearchParams(qs); 
// for (let param of searchParams) { 
//  console.log(param); 
// } 
// ["q", "javascript"] 
// ["num", "10"]

