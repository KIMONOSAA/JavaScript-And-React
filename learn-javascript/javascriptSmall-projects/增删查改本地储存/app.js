const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");


let editElement;
let editFlag = false;
let editID = "";

//用户点击按钮时候触发的事件
form.addEventListener('submit', addItem);

clearBtn.addEventListener('click',clearItems);

window.addEventListener("DOMContentLoaded",setupItems);

function addItem(e) {
    e.preventDefault(); //阻止事件//我也不知道为什么  
    const value = grocery.value; //获取文本框的值

    const id = new Date().getTime().toString(); //创建一个由当前时间ID（后面要用他来储存ID值）

    if (value && !editFlag) { //值不为空，flag不为真就进行这步操作
        
        createListItem(id,value);
    //     const element = document.createElement('article'); //我肯定要进行添加操作啊

    //     element.classList.add('grocery-item'); //这些操作就是为了动态添加html以及属性

    //     const attr = document.createAttribute('data-id'); //创建HTML元素的属性不是元素哦
    //     attr.value = id;
    //     element.setAttributeNodeNS(attr); //为article这个标签设置一个属性
    //     element.innerHTML = `<p class="title">${value}</p>
    //     <div class="btn-container">
    //     <!-- edit btn -->
    //     <button type="button" class="edit-btn">
    //         <i class="fas fa-edit"></i>
    //     </button>
    //     <!-- delete btn -->
    //     <button type="button" class="delete-btn">
    //         <i class="fas fa-trash"></i>
    //     </button>
    //     </div>
    // `;

    //     const deleteBtn = document.querySelector(".delete-btn");
    //     const editBtn = document.querySelector(".edit-btn");

    //     deleteBtn.addEventListener('click',deleteItem);
    //     editBtn.addEventListener('click',editItem);

    //     list.appendChild(element);
        
        displayAlert("item added to the list","success"); //提示他添加成功
        container.classList.add("show-container"); //添加以显示出来

        addToLocalStorage(id,value); //后面有用储存ID有关
        setBackToDefault();//添加完后要把文本框的值设置为空
    } else if (value && editFlag) { //值不为空，flag不为假就进行这步操作
        editElement.innerHTML = value;

        displayAlert("value changed","success");
        editLocalStorage(editID,value);
        setBackToDefault();
    } else { //如果值都没有肯定要输出错误啊
        displayAlert("please enter value", "danger");

    }
}

function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    //过一秒就删除这个输出错误的信息
    setTimeout(function () {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000);
}

function clearItems(){
    const items = document.querySelectorAll('.grocery-item'); //获取全部这个类的标签

    if(items.length > 0){ //如果这个标签有就遍历删除
        items.forEach(function (item){
            list.removeChild(item);
        });
    }
    container.classList.remove("show-container"); //删除原来的添加显示的类
    displayAlert("empty list","danger"); //输入添加成功
    setBackToDefault();
    localStorage.removeItem("list");
}
function deleteItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);

    if(list.children.length === 0){
        container.classList.remove("show-container");
    }
    displayAlert("item remove ","danger");
    setBackToDefault();

    removeFromLocalStorage(id);
}
function editItem(e){ //修改
    const element = e.currentTarget.parentElement.parentElement;
    
    editElement = e.currentTarget.parentElement.previousElementSibling;
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "edit";
}
function setBackToDefault(){
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit";
}


function addToLocalStorage(id,value){
    const grocery = {id,value};
    let items = getLocalStorage();
    console.log(items);
    items.push(grocery);
    localStorage.setItem('list',JSON.stringify(items));
}
function getLocalStorage() {
    return localStorage.getItem("list")
      ? JSON.parse(localStorage.getItem("list"))
      : [];
  }
function removeFromLocalStorage(id){
    let items = getLocalStorage();

    items = items.filter(function(item){
        if(item.id !== id){
            return item;
        }
    });
    localStorage.setItem("list",JSON.stringify(items));
}
function editLocalStorage(id,value){
    let items = getLocalStorage();
    items = items.map(function(item){
        if(item.id === id){
            item.value = value;
        }
        return item;
    });
    localStorage.setItem("list",JSON.stringify(items));
}



function setupItems() {
    let items = getLocalStorage();
  
    if (items.length > 0) {
      items.forEach(function (item) {
        createListItem(item.id, item.value);
      });
      container.classList.add("show-container");
    }
  }

function createListItem(id,value){

    const element = document.createElement('article'); //我肯定要进行添加操作啊

    element.classList.add('grocery-item'); //这些操作就是为了动态添加html以及属性

    const attr = document.createAttribute('data-id'); //创建HTML元素的属性不是元素哦
    attr.value = id;
    element.setAttributeNode(attr); //为article这个标签设置一个属性
    element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
      <!-- edit btn -->
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <!-- delete btn -->
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  `;

  const deleteBtn = element.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteItem);
  const editBtn = element.querySelector(".edit-btn");
  editBtn.addEventListener("click", editItem);

    list.appendChild(element);
}

