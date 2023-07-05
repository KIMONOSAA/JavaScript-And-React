const sidebars = document.querySelector('.sidebar');
const sidebarBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');


sidebarBtn.addEventListener('click', () =>{
    sidebars.classList.toggle("show-sidebar");
});

closeBtn.addEventListener('click', () =>{
    sidebars.classList.remove("show-sidebar");
});
