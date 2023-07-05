// // 随机双向图

// class Node{
//     constructor(id){
//         this.id = id;
//         this.neighbors = new Set();
//     }

//     connect(node){
//         if(node !== this){
//             this.neighbors.add(node);
//             node.neighbors.add(this);
//         }
//     }
// }

// class RandomGraph{
//     constructor(size){
//         this.nodes = new Set();

//         //创建节点
//         for(let i = 0;i<size;++i){
//             this.nodes.add(new Node(i));
//         }

//         const threshold = 1 / size;
//         for(const x of this.nodes){
//             for(const y of this.nodes){
//                 if(Math.random() < threshold)
//                 {
//                     x.connect(y);
//                 }
//             }
//         }
//     }
//     print() { 
//         for (const node of this.nodes) { 
//         const ids = [...node.neighbors] 
//         .map((n) => n.id) 
//         .join(','); 
//         console.log(`${node.id}: ${ids}`); 
//         } 
//         }
    
// }

// const g = new RandomGraph(6);

// g.print();

function SuperType(name){ 
 this.name = name; 
} 
function SubType() { 
 // 继承 SuperType 并传参
 SuperType.call(this, "Nicholas"); 
 // 实例属性
 this.age = 29; 
} 
let instance = new SubType(); 
console.log(instance.name); // "Nicholas"; 
console.log(instance.age);