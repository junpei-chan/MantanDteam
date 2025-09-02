"use strict";
const mainCategoryItems = document.querySelectorAll(".main-category li");
const subCategoryItems = document.querySelectorAll(".sub-category li");
const categories = {
    "すべて": ["パスタ", "ハンバーグ", "期間限定"],
    "セット": ["Aセット", "Bセット", "Cセット"],
    "ランチ": ["Aランチ", "Bランチ", "Cランチ"],
    "お子さま": ["お子さまランチ", "お子さまデザート", "お子さまドリンク"],
    "サイド": ["ポテトフライ", "スープ", "サラダ"],
    "デザート/ドリンク": ["アイスクリーム", "ソフトドリンク", "アルコール"],
};
mainCategoryItems.forEach(item => {
    item.addEventListener("click", () => {
        mainCategoryItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
        updateSubCategories();
    });
});
subCategoryItems.forEach(item => {
    item.addEventListener("click", () => {
        subCategoryItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    });
});
function updateSubCategories() {
    const activeMainCategory = document.querySelector(".main-category li.active");
    if (!activeMainCategory)
        return;
    const key = activeMainCategory.innerHTML;
    subCategoryItems.forEach((item, index) => {
        item.innerHTML = categories[key][index];
    });
}
