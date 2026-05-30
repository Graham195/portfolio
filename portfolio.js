const words = ["Web Designer", "Tech Enthusiast", "Frontend Developer"];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect(){
    currentWord = words[wordIndex];

    if(!isDeleting){
document.getElementById("typing").textContent = currentWord.substring(0, charIndex + 1);
charIndex++;
        if (charIndex === currentWord.length){
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    }else {
        document.getElementById("typing").textContent = currentWord.substring(0, charIndex -1);
        charIndex--;
        if(charIndex === 0){
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }
    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

let menuIcon = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () =>{
    navbar.classList.toggle("active");
};


function revealOnScroll(){
    let elements = document.querySelectorAll(".reveal");

    for (let i = 0; i < elements.length; i++){
        let windowHeight = window.innerHeight;
        let elementTop = elements[i].getBoundingClientRect().top;
        let elementVisible = 100;

        if (elementTop < windowHeight - elementVisible){
            elements[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", revealOnScroll);


let toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.onclick = function (){
    document.body.classList.toggle("light");
};


const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("form-message");

    if (name === "" || email === "" || subject === "" || message === ""){
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";

        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color ="red";

        return;
    }

    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = "lime";

    form.reset();
});
