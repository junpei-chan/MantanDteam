const contents = document.querySelector(".main-contents") as HTMLElement | null;
const completed = document.querySelector(".completed") as HTMLElement | null;
const btn = document.querySelector(".accountingBtn") as HTMLElement | null;

if (contents && completed && btn) {
  btn.addEventListener("click", () => {
    contents.style.display = "none";
    completed.style.display = "block";
  });
}