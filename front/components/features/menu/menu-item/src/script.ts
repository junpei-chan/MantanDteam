const modal = document.getElementById("MenuDetailModalContainer") as HTMLDialogElement | null;
const menuItem = document.getElementById("MenuItem") as HTMLDivElement | null;

if (modal && menuItem) {
  menuItem.addEventListener("click", () => {
    modal.showModal();
  });
}