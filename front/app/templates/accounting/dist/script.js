"use strict";
const contents = document.querySelector(".main-contents");
const completed = document.querySelector(".completed");
const btn = document.querySelector(".accountingBtn");
if (contents && completed && btn) {
    btn.addEventListener("click", () => {
        contents.style.display = "none";
        completed.style.display = "block";
    });
}
