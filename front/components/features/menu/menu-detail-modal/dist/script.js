"use strict";
const dialog = document.getElementById("MenuDetailModalContainer");
const modalDetailModal = document.querySelector(".menu-detail-modal");
const closeBtn = document.getElementById("closeBtn");
const backBtn = document.getElementById("backBtn");
if (closeBtn && dialog) {
    closeBtn.addEventListener("click", () => {
        dialog.close();
    });
}
if (backBtn && dialog) {
    backBtn.addEventListener("click", () => {
        dialog.close();
    });
}
