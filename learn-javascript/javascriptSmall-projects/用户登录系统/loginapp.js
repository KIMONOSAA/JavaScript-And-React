
// 登录界面
window.onload = function() {
    // 把所有的代码放在这里
    function getLocalStorage(){
      return localStorage.getItem('mylist') ? JSON.parse(localStorage.getItem('mylist')) : [];
    }
    function hasToLocalStorage(value,pass){
      let items = getLocalStorage();
      return items.some(function(item){
          return value === item.value && pass === item.pass;
      });
    }
  
    let echoValue = document.querySelector(".please");
    let user_login = document.querySelector(".user-center");
    let userMenu = document.querySelector(".user-one");
    let userValue = document.querySelector(".user_value");
    let passValue = document.querySelector(".user_id");
    let loginBtn = document.querySelector(".login");
    let registBtn = document.querySelector(".registration");
  
    let st = false
    let pass;
    let value;
    loginBtn.addEventListener('click',hasCheck);
    registBtn.addEventListener('click',nextHtml);
    function hasCheck(e){
      e.preventDefault();
      value = userValue.value;
      pass = passValue.value;
  
      let id = new Date().getTime().toString();
      let valueBtn = loginBtn.textContent;
  
      if(!value || !pass ){
          displyNull("你的密码或名称不能为空！！","error");
      }else{
          let has = hasUCLN(value,pass);
          if(has == true){
              let st = hasToLocalStorage(value,pass);
              if(st){
              displyNull(`${valueBtn}成功`,"success");
              }else{
                  displyNull(`${valueBtn}失败`,"error");
              }
          }else{
              displyNull("你的密码格式错误！要有大写小写特殊符号","error");
          }
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
    function nextHtml(){
      window.location.href = "registered.html";
    }
  }