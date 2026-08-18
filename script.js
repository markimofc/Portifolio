const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");


// =========================================================
// MENU MOBILE
// =========================================================

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// =========================================================
// FECHAR MENU AO CLICAR EM UM LINK
// =========================================================

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// =========================================================
// ANIMAÇÃO AO ROLAR A PÁGINA
// =========================================================

const revealElements = document.querySelectorAll(
    ".section-header, .about-text, .about-highlight, .skill-card, .media-card, .project-card, .skill-category, .timeline-item, .evolution-step, .quote, .contact-content"
);

revealElements.forEach(element => {

    element.classList.add("reveal");

});


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {

    observer.observe(element);

});