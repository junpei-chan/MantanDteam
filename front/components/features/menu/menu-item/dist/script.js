"use strict";
const modal = document.getElementById("MenuDetailModalContainer");
const menuItem = document.getElementById("MenuItem");
if (modal && menuItem) {
    menuItem.addEventListener("click", () => {
        modal.showModal();
    });
}
