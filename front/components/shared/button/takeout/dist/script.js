"use strict";
const btn = document.getElementById("TakeoutBtn");
const CategoryMenu = document.getElementById("CategoryMenu");
const TakeoutCategoryMenu = document.getElementById("TakeoutCategoryMenu");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    CategoryMenu === null || CategoryMenu === void 0 ? void 0 : CategoryMenu.classList.toggle("hidden");
    TakeoutCategoryMenu === null || TakeoutCategoryMenu === void 0 ? void 0 : TakeoutCategoryMenu.classList.toggle("hidden");
    if (btn.classList.contains("active")) {
        btn.classList.remove("active");
    }
    else {
        btn.classList.add("active");
    }
});
