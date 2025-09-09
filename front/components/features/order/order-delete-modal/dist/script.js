"use strict";
const btns = document.querySelectorAll(".buttons button");
const dialog = document.getElementById("orderDeleteModalContainer");
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        dialog === null || dialog === void 0 ? void 0 : dialog.close();
    });
});
