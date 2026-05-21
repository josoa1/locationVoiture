/* =========================
FILE : script.js
========================= */

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.onclick = () => {
    navbar.classList.toggle("active");
};

/* HEADER SHADOW */

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if(window.scrollY > 50){
        header.style.background = "#0b0f19";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
    }
    else{
        header.style.background = "rgba(0,0,0,0.6)";
        header.style.boxShadow = "none";
    }

});
