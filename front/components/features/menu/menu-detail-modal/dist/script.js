"use strict";
const dialog = document.getElementById("MenuDetailModalContainer");
const modalDetailModal = document.querySelector(".menu-detail-modal");
const menuDetailStepbarItems = document.querySelector(".menu-detail-stepbar-item");
const contents = document.querySelectorAll(".content");
const closeBtn = document.querySelector(".close-button");
const nextBtns = document.querySelectorAll(".next-button");
const backBtns = document.querySelectorAll(".back-button");
if (closeBtn && dialog) {
    closeBtn.addEventListener("click", () => {
        dialog.close();
    });
}
nextBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        var _a;
        const currentBtn = document.querySelector(".content.current");
        if (!currentBtn)
            return;
        const currentItem = document.querySelector(".menu-detail-stepbar-item.current");
        if (!currentItem)
            return;
        currentItem.classList.remove("current");
        currentItem.classList.add("completed");
        (_a = currentItem.nextElementSibling) === null || _a === void 0 ? void 0 : _a.classList.add("current");
        const next = currentBtn.nextElementSibling;
        if (next && next.classList.contains("content")) {
            currentBtn.classList.remove("current");
            next.classList.add("current");
        }
    });
});
backBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        var _a, _b;
        const currentBtn = document.querySelector(".content.current");
        if (!currentBtn)
            return;
        const currentItem = document.querySelector(".menu-detail-stepbar-item.current");
        if (!currentItem)
            return;
        currentItem.classList.remove("current");
        (_a = currentItem.previousElementSibling) === null || _a === void 0 ? void 0 : _a.classList.remove("completed");
        (_b = currentItem.previousElementSibling) === null || _b === void 0 ? void 0 : _b.classList.add("current");
        const prev = currentBtn.previousElementSibling;
        if (!(prev === null || prev === void 0 ? void 0 : prev.classList.contains("content"))) {
            dialog === null || dialog === void 0 ? void 0 : dialog.close();
            return;
        }
        if (prev && prev.classList.contains("content")) {
            currentBtn.classList.remove("current");
            prev.classList.add("current");
        }
    });
});
document.querySelectorAll(".options-contents ul li").forEach(li => {
    const input = li.querySelector("input[type='checkbox']");
    if (input) {
        input.addEventListener("click", (e) => {
            e.stopPropagation();
            if (input.checked) {
                li.classList.add("checked");
            }
            else {
                li.classList.remove("checked");
            }
        });
        li.addEventListener("click", (e) => {
            if (e.target === input)
                return;
            input.checked = !input.checked;
            li.classList.toggle("checked", input.checked);
        });
    }
});
