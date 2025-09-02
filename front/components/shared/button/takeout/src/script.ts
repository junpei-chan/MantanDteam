const btn = document.getElementById("TakeoutBtn");
const CategoryMenu = document.getElementById("CategoryMenu");
const TakeoutCategoryMenu = document.getElementById("TakeoutCategoryMenu");

btn?.addEventListener("click", () => {
  CategoryMenu?.classList.toggle("hidden");
  TakeoutCategoryMenu?.classList.toggle("hidden");

  if (btn.classList.contains("active")) {
    btn.classList.remove("active");
  } else {
    btn.classList.add("active");
  }
});