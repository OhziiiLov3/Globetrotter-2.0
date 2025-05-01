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


// Set Dynamic Year in Footer
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});


// Gallery Modal Logic
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("captionText");
const closeBtn = document.getElementById("closeBtn");

document.querySelectorAll(".gallery-img").forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerText = img.alt;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
