"use strict";
const callCancelBtn = document.getElementById("cancelBtn");
const callDialog = document.getElementById("CallModalContainer");
if (callCancelBtn && callDialog) {
    callCancelBtn.addEventListener("click", () => {
        callDialog.close();
    });
}
