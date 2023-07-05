
// 1.async
// async 关键字用于声明异步函数。这个关键字可以用在函数声明、函数表达式、箭头函数和方法上：
// function senRequest(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("John Doc");
//         },2000);//定时器，两个参数第一个参数是当第一个定时器时间到了就执行代码，，第二个是时间参数
//     });
// }

// let promise = senRequest();//这个函数会返回Promise所以需要把这个函数返回的Promise OBJECT 赋值一个变量
// promise.then(function(username){console.log(username);
//     console.log(promise);//Promise { <pending> }不会显示最终答案所以要想取得最终答案就要用then获取用户名
// });
//主角登场!!!
//模拟获取用户信息
// function senRequest(){ //3.等待这个执行完成任务
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("John Doc");//会通过resol返回用户名并且赋予username变量
//         },2000);
//     });
// }
// async function getUsername(){
//     let username = await senRequest();//直接用await会报错，因为await要跟async放在一起 、//2.在函数里调用senRequerst
//     console.log(username);
// }
// getUsername();//两秒之后会打印John Doc //1.首先执行getUsername

// function senRequest(){ //3.等待这个执行完成任务
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             reject("Request rejected due to server error");//如果是reject这时候我们要捕捉错误就需要try catch
//         },2000);
//     });
// }
// async function getUsername(){
//     try{ //try的部分就是尝试执行会报错的代码
//         let username = await senRequest();//直接用await会报错，因为await要跟async放在一起 、//2.在函数里调用senRequerst
//         console.log(username);
//     }catch(message){ //catch用来捕捉错误信息
//         console.log(`Error:${message}`);
//     }
   
// }
// getUsername();//两秒之后会打印John Doc //1.首先执行getUsername


//fetch函数发送请求到远程服务器获取用户信息
function senRequest(){ //3.等待这个执行完成任务
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            reject("Request rejected due to server error");//如果是reject这时候我们要捕捉错误就需要try catch
        },2000);
    });
}
async function getUsername(){
    try{ //try的部分就是尝试执行会报错的代码
        let username = await fetch("https://jsonplaceholder.typicode.com/users");//直接用await会报错，因为await要跟async放在一起 、//2.在函数里调用senRequerst
        username = await username.json();
        console.log(username);
    }catch(message){ //catch用来捕捉错误信息
        console.log(`Error:${message}`);
    }
   
}
getUsername();//两秒之后会打印John Doc //1.首先执行getUsername