"use strict";
const callCancelBtn = document.getElementById("cancelBtn");
const callDialog = document.getElementById("CallModalContainer");
const callBtns = document.querySelectorAll(".call-buttons button");
const callContent = document.querySelector(".call");
const standbyContent = document.querySelector(".standby");
if (callCancelBtn && callDialog) {
    callCancelBtn.addEventListener("click", () => {
        callDialog.close();
    });
}
if (callDialog && callContent && standbyContent) {
    const observer = new MutationObserver(() => {
        if (callDialog.open) {
            callContent.style.removeProperty('display');
            standbyContent.style.display = "none";
        }
    });
    observer.observe(callDialog, { attributes: true, attributeFilter: ["open"] });
}
if (callContent && standbyContent) {
    callBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            callContent.style.display = "none";
            standbyContent.style.display = "flex";
            setTimeout(() => {
                callDialog === null || callDialog === void 0 ? void 0 : callDialog.close();
            }, 1500);
        });
    });
}
