"use strict";
console.log("script loaded");
const langButtons = document.querySelectorAll(".lang-switch-menu button");
langButtons.forEach(button => {
    button.addEventListener("click", () => {
        langButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
    });
});
