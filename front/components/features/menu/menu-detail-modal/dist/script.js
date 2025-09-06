"use strict";
const dialog = document.getElementById("MenuDetailModalContainer");
const modalDetailModal = document.querySelector(".menu-detail-modal");
const contents = document.querySelectorAll(".content");
const closeBtn = document.querySelector(".close-button");
const nextBtns = document.querySelectorAll(".next-button");
const backBtns = document.querySelectorAll(".back-button");
if (closeBtn && dialog) {
    closeBtn.addEventListener("click", () => {
        dialog.close();
    });
}
nextBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const current = document.querySelector(".content.current");
        if (!current)
            return;
        const next = current.nextElementSibling;
        if (next && next.classList.contains("content")) {
            current.classList.remove("current");
            next.classList.add("current");
        }
    });
});
backBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const current = document.querySelector(".content.current");
        if (!current)
            return;
        const prev = current.previousElementSibling;
        if (!(prev === null || prev === void 0 ? void 0 : prev.classList.contains("content"))) {
            dialog === null || dialog === void 0 ? void 0 : dialog.close();
            return;
        }
        if (prev && prev.classList.contains("content")) {
            current.classList.remove("current");
            prev.classList.add("current");
        }
    });
});
