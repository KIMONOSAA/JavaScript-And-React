// function updateProgress() { 
//     var div = document.getElementById("status"); 
//     div.style.width = (parseInt(div.style.width, 10) + 5) + "%"; 
//     if (div.style.left != "100%") { 
//     requestAnimationFrame(updateProgress); 
//     } 
//    } 
//    requestAnimationFrame(updateProgress);
// 2D 绘图上下文支持很多在画布上绘制路径的方法。通过路径可以创建复杂的形状和线条。要绘制
// 路径，必须首先调用 beginPath()方法以表示要开始绘制新路径。然后，再调用下列方法来绘制路径。
//  arc(x, y, radius, startAngle, endAngle, counterclockwise)：以坐标(x, y)为圆
// 心，以 radius 为半径绘制一条弧线，起始角度为 startAngle，结束角度为 endAngle（都是
// 弧度）。最后一个参数 counterclockwise 表示是否逆时针计算起始角度和结束角度（默认为
// 顺时针）。
//  arcTo(x1, y1, x2, y2, radius)：以给定半径 radius，经由(x1, y1)绘制一条从上一点
// 到(x2, y2)的弧线。
//  bezierCurveTo(c1x, c1y, c2x, c2y, x, y)：以(c1x, c1y)和(c2x, c2y)为控制点，
// 绘制一条从上一点到(x, y)的弧线（三次贝塞尔曲线）。
//  lineTo(x, y)：绘制一条从上一点到(x, y)的直线。
//  moveTo(x, y)：不绘制线条，只把绘制光标移动到(x, y)。
//  quadraticCurveTo(cx, cy, x, y)：以(cx, cy)为控制点，绘制一条从上一点到(x, y)
// 的弧线（二次贝塞尔曲线）。
//  rect(x, y, width, height)：以给定宽度和高度在坐标点(x, y)绘制一个矩形。这个方法
// 与 strokeRect()和 fillRect()的区别在于，它创建的是一条路径，而不是独立的图形。
// 创建路径之后，可以使用 closePath()方法绘制一条返回起点的线。如果路径已经完成，则既可
// 以指定 fillStyle 属性并调用 fill()方法来填充路径，也可以指定 strokeStyle 属性并调用
// stroke()方法来描画路径，还可以调用 clip()方法基于已有路径创建一个新剪切区域。
// 下面这个例子使用前面提到的方法绘制了一个不带数字的表盘：

// 文本和图像混合也是常见的绘制需求，因此2D绘图上下文还提供了绘制文本的方法，即fillText()
// 和 strokeText()。这两个方法都接收 4 个参数：要绘制的字符串、x 坐标、y 坐标和可选的最大像素
// 宽度。而且，这两个方法最终绘制的结果都取决于以下 3 个属性。
//  font：以 CSS 语法指定的字体样式、大小、字体族等，比如"10px Arial"。
//  textAlign：指定文本的对齐方式，可能的值包括"start"、"end"、"left"、"right"和
// "center"。推荐使用"start"和"end"，不使用"left"和"right"，因为前者无论在从左到右
// 书写的语言还是从右到左书写的语言中含义都更明确。
//  textBaseLine ：指定文本的基线，可能的值包括 "top" 、 "hanging" 、 "middle" 、
// "alphabetic"、"ideographic"和"bottom"。
// 这些属性都有相应的默认值，因此没必要每次绘制文本时都设置它们。fillText()方法使用
// fillStyle 属性绘制文本，而 strokeText()方法使用 strokeStyle 属性。通常，fillText()方法
// 是使用最多的，因为它模拟了在网页中渲染文本。例如，下面的例子会在前一节示例的表盘顶部绘制数
// 字“12”：
// context.font = "bold 14px Arial"; 
// context.textAlign = "center"; 
// context.textBaseline = "middle"; 
// context.fillText("12", 100, 20); 
let drawing = document.getElementById("drawing"); 
// 确保浏览器支持<canvas> 
if (drawing.getContext) { 
 let context = drawing.getContext("2d"); 
 // 创建路径
 context.beginPath(); 
 // 绘制外圆
 context.arc(100, 100, 99, 0, 2 * Math.PI, false); 
 // 绘制内圆
 context.moveTo(194, 100); 
 context.arc(100, 100, 94, 0, 2 * Math.PI, false); 
 // 移动原点到表盘中心
 context.translate(100, 100); 
 // 旋转表针
 context.rotate(1); 
 // 绘制分针
 context.moveTo(0, 0); 
 context.lineTo(0, -85); 
 // 绘制时针
 context.moveTo(0, 0); 
 context.lineTo(-65, 0); 
 // 描画路径
 context.stroke(); 
}