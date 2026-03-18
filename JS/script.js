// // let menuIcon = document.querySelector('#menu-icon');
// // let navbar = document.querySelector('.navbar');

// // menuIcon.onClick = () => {
// //     menuIcon.classList.toggle('fa-xmark');
// //     navbar.classList.toggle('active');
// // }


// // let sections = document.querySelectorAll('section');
// // let navLinks = document.querySelectorAll('header nav a');

// // window.onscroll = () => {
// //     sections.forEach(sec => {
// //         let top = window.scrollY;
// //         let offset = sec.offsetTop - 150;
// //         let height = sec.offsetHeight;
// //         let id = sec.getAttribute('id');

// //         if(top >= offset && top < offset + height) {
// //             navLinks.forEach.apply(links => {
// //                 links.classList.remove('active');
// //                 document.querySelector('header nav a[href*=' +id + ']').classList.add('active');
// //             });
// //         };
// //     });

// //     let header = document.querySelector('header');
// //     header.classList.toggle('sticky',window.scrollY > 100);

// //     menuIcon.classList.remove('fa-xmark');
// //     navbar.classList.remove('active');
// // };

// // ScrollReveal({ 
// //     distance:'80px',
// //     duration: 2000,
// //     delay:200,
// // });
// // ScrollReveal().reveal('.home-content, heading', {origin: 'top'});
// // ScrollReveal().reveal('.home-img, .education-container, .portfolio-box, .contact form', {origin: 'bottom'});
// // ScrollReveal().reveal('.home-contact h1, .about-img', {origin: 'left'});
// // ScrollReveal().reveal('.home-contact p, .about-content', {origin: 'right'});

// // const typed = new Typed('.multiple-text', {
// //     strings: ['Frontend Developer', 'Tech Enthusiast','Computer Science Engineer'],
// //     typeSpeed: 70,
// //     backSpeed: 70,
// //     backDelay: 1000,
// //     loop: true,
// // });


// const roles = [
// "Data Engineer",
// "ETL Developer",
// "Data Pipeline Specialist"
// ];

// let i = 0;

// setInterval(() => {
// document.querySelector(".typing").textContent = roles[i];
// i = (i + 1) % roles.length;
// }, 2000);

// FADE-IN ON LOAD
window.addEventListener("load", () => {
  document.querySelectorAll(".fade").forEach(el => {
    el.classList.add("show");
  });
});

// TYPING EFFECT
const roles = [
  "Data Engineer",
  "ETL Developer",
  "Data Analyst"
];

let i = 0;
let j = 0;
let currentRole = "";
let isDeleting = false;

function typeEffect() {
  currentRole = roles[i];

  if (!isDeleting) {
    document.getElementById("typing").textContent =
      currentRole.substring(0, j++);
  } else {
    document.getElementById("typing").textContent =
      currentRole.substring(0, j--);
  }

  // if (!isDeleting && j === currentRole.length) {
  if (!isDeleting && j > currentRole.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1200);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.querySelector(".navbar");

  menuIcon.onclick = () => {
    navbar.classList.toggle("active");
  };


  const navLinks = document.querySelectorAll(".navbar a");

  navLinks.forEach(link => {
    link.onclick = () => {
      navbar.classList.remove("active");
    };
  });
