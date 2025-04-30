const menuToggle = document.querySelector('#menu-toggle');
const navLinks = document.querySelector('.nav-links');
const menuIcon = document.querySelector('#menu-icon');


menuToggle.addEventListener('click', ()=> {
    console.log("click");
    
    navLinks.classList.toggle('active');

    if(navLinks.classList.contains('active')){
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    }else{
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
});

