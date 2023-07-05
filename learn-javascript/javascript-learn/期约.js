// let p1 = new Promise((resolve, reject) => reject(Error('foo'))); 
// let p2 = new Promise((resolve, reject) => { throw Error('foo'); }); 
// let p3 = Promise.resolve().then(() => { throw Error('foo'); }); 
// let p4 = Promise.reject(Error('foo')); 
// setTimeout(console.log, 0, p1); // Promise <rejected>: Error: foo 
// setTimeout(console.log, 0, p2); // Promise <rejected>: Error: foo 
// setTimeout(console.log, 0, p3); // Promise <rejected>: Error: foo 
// setTimeout(console.log, 0, p4); // Promise <rejected>: Error: foo


// console.log('begin synchronous execution'); 
// try { 
//  throw Error('foo'); 
// } catch(e) { 
//  console.log('caught error', e); 
// } 
// console.log('continue synchronous execution');


//串行期约合成
// function addTwo(x){return x + 2;}
// function addThree(x){return x + 3;}
// function addFive(x){return x + 5;}

// function addTen(x){
//     return Promise.resolve(x)
//         .then(addTwo)
//         .then(addThree)
//         .then(addFive);
// }
// addTen(8).then(console.log);

// function addTwo(x) {return x + 2;} 
// function addThree(x) {return x + 3;} 
// function addFive(x) {return x + 5;} 
// function compose(...fns) { 
//  return (x) => fns.reduce((promise, fn) => promise.then(fn), Promise.resolve(x)) 
// } 
// let addTen = compose(addTwo, addThree, addFive);

// addTen(8).then(console.log); // 18
let senToAirport = false
let p = new Promise(function(resolve,reject){
    if(senToAirport){
        resolve("from resolve() : send to airport");//怎么才能在then获取这个返回值？在then添加一个参数message
    }else{
        reject("from reject():order cancelled");
    }
});

p
.then(function(message){console.log(`${message}`)})//
.catch(function(message){console.log(`${message}`)});

let f = fetch("https://jsonplaceholder.typicode.com/users");//当promise返回数据的时候，需要定义then和回调函数获取用户数据
f
.then(function(UserData){
    // console.log(UserData);//这时候返回的格式不对，我们需要返回的是json格式
    return UserData.json();
})
.then(function(jsonData){
    console.log(jsonData);
})//下一个then才能获取到json格式
;