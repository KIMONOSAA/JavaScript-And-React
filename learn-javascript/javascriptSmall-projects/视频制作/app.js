const btn = document.querySelector(".switch-btn");

const video = document.querySelector(".video-container");

btn.addEventListener('click',function(){
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide');
        video.pause();
    }else{
        btn.classList.remove('slide');
        video.play();
    }
});

//preloader
const preloader = document.querySelector('.preloader');

window.addEventListener('load', function() {
    setTimeout(function() {
        preloader.classList.add("hide-preloader");
    }, 2000); // 设置延迟时间，单位为毫秒（这里延迟2秒）
});
