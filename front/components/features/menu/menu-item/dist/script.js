"use strict";
const modal = document.getElementById("MenuDetailModalContainer");
const menuItems = document.querySelectorAll(".menu-item");
function resetMenuDetailModal() {
    const stepbarItems = document.querySelectorAll(".menu-detail-stepbar-item");
    stepbarItems.forEach((item, idx) => {
        item.classList.remove("current", "completed");
        if (idx === 0) {
            item.classList.add("current");
        }
    });
    const contents = document.querySelectorAll(".content");
    contents.forEach((content, idx) => {
        content.classList.remove("current");
        if (idx === 0) {
            content.classList.add("current");
        }
    });
}
if (modal) {
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            resetMenuDetailModal();
            modal.showModal();
        });
    });
}
