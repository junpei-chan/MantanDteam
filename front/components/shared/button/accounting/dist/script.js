"use strict";
const accountingModal = document.getElementById("AccountingModalContainer");
const btn = document.getElementById("AccountingBtn");
if (btn && accountingModal) {
    btn.addEventListener("click", () => {
        accountingModal.showModal();
    });
}
