type CategoryKey = keyof typeof categories;

const mainCategoryItems = document.querySelectorAll<HTMLElement>(".main-category li");
const subCategoryItems = document.querySelectorAll<HTMLElement>(".sub-category li");

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
  const activeMainCategory = document.querySelector<HTMLElement>(".main-category li.active");
  if (!activeMainCategory) return;

  const key = activeMainCategory.innerHTML as CategoryKey;
  const subCats = categories[key] || [];
  const subCategoryList = document.querySelector(".sub-category ul");
  if (!subCategoryList) return;

  // sub-categoryのliを一旦全て削除
  subCategoryList.innerHTML = "";

  // categories[key]の数だけliを生成
  subCats.forEach((name, i) => {
    const li = document.createElement("li");
    li.textContent = name;
    if (i === 0) li.classList.add("active");
    li.addEventListener("click", () => {
      subCategoryList.querySelectorAll("li").forEach(i => i.classList.remove("active"));
      li.classList.add("active");
    });
    subCategoryList.appendChild(li);
  });
}