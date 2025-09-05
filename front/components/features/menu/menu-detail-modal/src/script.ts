const dialog = document.getElementById("MenuDetailModalContainer") as HTMLDialogElement | null;
const closeBtn = document.getElementById("closeBtn");
const backBtn = document.getElementById("backBtn");

if (closeBtn && dialog) {
  closeBtn.addEventListener("click", () => {
    dialog.close();
  });
}

if (backBtn && dialog) {
  backBtn.addEventListener("click", () => {
    dialog.close();
  });
}
