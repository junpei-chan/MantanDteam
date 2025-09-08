"use strict";
const backBtn = document.getElementById("backBtn");
const accountingDialog = document.getElementById("AccountingModalContainer");
if (backBtn && accountingDialog) {
    backBtn.addEventListener("click", () => {
        accountingDialog.close();
    });
}
