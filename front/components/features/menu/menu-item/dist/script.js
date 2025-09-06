"use strict";
const modal = document.getElementById("MenuDetailModalContainer");
const menuItems = document.querySelectorAll(".menu-item");
if (modal) {
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            modal.showModal();
        });
    });
}
