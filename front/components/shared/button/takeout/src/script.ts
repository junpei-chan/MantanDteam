function bindTakeoutBtn() {
  const btn = document.getElementById("TakeoutBtn");
  const CategoryMenu = document.getElementById("CategoryMenu");
  const TakeoutCategoryMenu = document.getElementById("TakeoutCategoryMenu");

  btn?.addEventListener("click", () => {
    CategoryMenu?.classList.toggle("hidden");
    TakeoutCategoryMenu?.classList.toggle("hidden");
    btn.classList.toggle("active");
  });
}

bindTakeoutBtn();