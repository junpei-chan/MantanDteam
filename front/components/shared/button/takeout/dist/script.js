"use strict";
const btn = document.getElementById("TakeoutBtn");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    if (btn.classList.contains("active")) {
        btn.classList.remove("active");
    }
    else {
        btn.classList.add("active");
    }
});
