const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");


 //第一种方法
//  navToggle.addEventListener('click',function(){
//         linksContainer.classList.toggle("show-links");
//  });

// 第二种//不过这种方法跟第一种又不太大的区别的是第二种的话如果在这个ul里面添加li的话也就是多加
//一个的话刷新之后你会看到多加的一条数据显示在页面上非常适合动态化很不错，第一个就跟第二个恰恰相反了

navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");

  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  // console.log(linksContainer.getBoundingClientRect());
});

// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 500) {
    console.log("helo");

    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});


//由于界面中点击链接跳到另一个指定的链接的位置不正确所以我们要取消这个事件
//自己来写代码获取这个位置

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link){
  link.addEventListener('click',function(e){
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;

    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;
    if(!fixedNav){
      position = position - navHeight;
    }
    if(navHeight > 82){
      position = position + containerHeight;
    }
    window.scrollTo({
      left:0,
      top:position
    });
    linksContainer.style.height = 0;
  });
});

