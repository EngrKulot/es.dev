document.addEventListener("DOMContentLoaded", function () {
    // Typing Effect
    const textArray = [
        "I design & code stunning web experiences.",
        "Creating clean, modern, and responsive websites.",
        "Bringing ideas to life with code."
    ];
    let index = 0;
    let charIndex = 0;
    const typingElement = document.getElementById("typing");

    function typeEffect() {
        if (charIndex < textArray[index].length) {
            typingElement.innerHTML += textArray[index].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 100);
        } else {
            setTimeout(eraseEffect, 2000);
        }
    }

    function eraseEffect() {
        if (charIndex > 0) {
            typingElement.innerHTML = textArray[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseEffect, 50);
        } else {
            index = (index + 1) % textArray.length;
            setTimeout(typeEffect, 500);
        }
    }

    typeEffect();

    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav");

    
    if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }
});
