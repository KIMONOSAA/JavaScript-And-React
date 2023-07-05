
// 注册界面
function getLocalStorage(){
    return localStorage.getItem("mylist") ? JSON.parse(localStorage.getItem("mylist")) : [];
}
function addToLocalStorage(value,pass,id){
    const procery = {value,pass,id};
    let items = getLocalStorage();
    items.push(procery);
    localStorage.setItem("mylist",JSON.stringify(items));
}

let echoValue = document.querySelector(".please");
let user_login = document.querySelector(".user-center");
let userMenu = document.querySelector(".user-one");
let userValue = document.querySelector(".user_value");
let passValue = document.querySelector(".user_id");
let passValueTwo = document.querySelector(".user_id2");
let loginBtn = document.querySelector(".login");
let emailValue = document.querySelector(".user_email");


let st = false
let pass;
let value;
let email;
loginBtn.addEventListener('click',hasCheck);

function hasCheck(e){
    e.preventDefault();
    value = userValue.value;
    pass = passValue.value;
    passTwo = passValueTwo.value;
    email = emailValue.value;
    let id = new Date().getTime().toString(); // 修改了这里
    let valueBtn = loginBtn.textContent;
    if(pass === passTwo && pass !== '' && passTwo !== ''){
        if(!value){
            displyNull("你的名称不能为空！！","error");
        }else{
            let has = hasUCLN(value,pass);
            const emailcheck = emailhas(email);
            if(has === true && emailcheck){
                addToLocalStorage(value,pass,id);
                displyNull(`${valueBtn}成功`,"success");
                window.location.href = "login.html"; // 添加了这里
            }else{
                displyNull("你的格式错误！要有大写小写","error");
            }
        }
    }
    else if(pass !== passTwo && passTwo){
        displyNull("你的密码格式错误！要有大写小写","error");
    }
    else if(!value || !pass && !passTwo){
        displyNull("你的密码或名称不能为空！！","error");
    }
}
function displyNull(text,action){
    echoValue.textContent = text;
    echoValue.classList.add(`please-${action}`);
    
    setTimeout(() => {
        echoValue.textContent = '';
        echoValue.classList.remove(`please-${action}`);
    },1000)
}

function hasUCLN(value,pass) {
    let regexValue = /^[a-zA-Z0-9\s]+$/.test(value);
    if(regexValue == true){
        let regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/.test(pass);
        if(regexPass == true){
            return true;
        }
    }else{
        displyNull("你的用户名格式错误！不能为特殊符号","error");
    }
    return false;
}


function emailhas(email){
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(email)){
        return true;
    }else{
        return false;
    }
}