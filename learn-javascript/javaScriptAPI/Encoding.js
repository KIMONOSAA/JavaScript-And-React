// 文本编码
// Encoding API 提供了两种将字符串转换为定型数组二进制格式的方法：批量编码和流编码。把字符
// 串转换为定型数组时，编码器始终使用 UTF-8。
// 1. 批量编码
// 所谓批量，指的是 JavaScript 引擎会同步编码整个字符串。对于非常长的字符串，可能会花较长时
// 间。批量编码是通过 TextEncoder 的实例完成的：

const { resolve } = require("core-js/fn/promise");
const { async } = require("regenerator-runtime");

// 个 encode()方法，该方法接收一个字符串参数，并以 Uint8Array 格式返回每个
// 字符的 UTF-8 编码：
// const textEncoder = new TextEncoder();

// const decodedText = 'foo';
// const encodedText = textEncoder.encode(decodedText);

// console.log(encodedText);
// f 的 UTF-8 编码是 0x66（即十进制 102）
// o 的 UTF-8 编码是 0x6F（即二进制 111）
//表情号也可以编码

// encodeInto()方法，该方法接收一个字符串和目标 Unit8Array，返回一个
// 字典，该字典包含 read 和 written 属性，分别表示成功从源字符串读取了多少字符和向目标数组写
// 入了多少字符。如果定型数组的空间不够，编码就会提前终止，返回的字典会体现这个结果：
//跟上面相反操作就对了

// const textEncoder = new TextEncoder();
// const fooArr = new Uint8Array(3);
// const barArr = new Uint8Array(2);

// const fooResult = textEncoder.encodeInto('foo',fooArr);
// const barResult = textEncoder.encodeInto('bar',barArr);

// console.log(fooArr);
// console.log(fooResult);

// console.log(barArr);
// console.log(barResult);

// 2. 流编码
// TextEncoderStream 其实就是 TransformStream 形式的 TextEncoder。将解码后的文本流通
// 过管道输入流编码器会得到编码后文本块的流：
// async function* chars(){
//     const decodedText = 'foo';
//     for(let char of decodedText){
//         yield await new Promise((resolve) => setTimeout(resolve,1000,char));
//     }
// }
// const decodedTextStream = new ReadableStream({
//     async start(controller){
//         for await (let chunk of chars()){
//             controller.enqueue(chunk);
//         }
//         controller.close();
//     }
// });


// const encodedTextStream = decodedTextStream.pipeThrough(new TextEncoderStream());
// const readableStreamDefaultReader = encodedTextStream.getReader();

// (async function(){
//     while(true){
//         const {done,value} = await readableStreamDefaultReader.read();
//         if(done){
//             break;
//         }else{
//             console.log(value);
//         }
//     }
// })();
//// Uint8Array[102] 
// Uint8Array[111] 
// Uint8Array[111]

// 文本解码
// Encoding API 提供了两种将定型数组转换为字符串的方式：批量解码和流解码。与编码器类不同，
// 在将定型数组转换为字符串时，解码器支持非常多的字符串编码，可以参考 Encoding Standard 规范的
// “Names and labels”一节。
// 默认字符编码格式是 UTF-8。
// 1. 批量解码
// 所谓批量，指的是 JavaScript 引擎会同步解码整个字符串。对于非常长的字符串，可能会花较长时
// 间。批量解码是通过 TextDecoder 的实例完成的：

// 与 TextEncoder 不同，TextDecoder 可以兼容很多字符编码。比如下面的例子就使用了 UTF-16
// 而非默认的 UTF-8：
// 2. 流解码
async function* chars() {
  // 每个块必须是一个定型数组
  const encodedText = [102, 111, 111].map((x) => Uint8Array.of(x));
  for (let char of encodedText) {
    yield await new Promise((resolve) => setTimeout(resolve, 1000, char));
  }
}
const encodedTextStream = new ReadableStream({
  async start(controller) {
    for await (let chunk of chars()) {
      controller.enqueue(chunk);
    }
    controller.close();
  },
});
const decodedTextStream = encodedTextStream.pipeThrough(
  new TextDecoderStream()
);
const readableStreamDefaultReader = decodedTextStream.getReader();
(async function () {
  while (true) {
    const { done, value } = await readableStreamDefaultReader.read();
    if (done) {
      break;
    } else {
      console.log(value);
    }
  }
})();
// f
// o
// o
