"use strict";
const callModal = document.getElementById("CallModalContainer");
const btn = document.getElementById("CallBtn");
console.log(callModal, btn);
if (btn && callModal) {
    btn.addEventListener("click", () => {
        callModal.showModal();
    });
}
