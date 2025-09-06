const modal = document.getElementById("MenuDetailModalContainer") as HTMLDialogElement | null;
const menuItems = document.querySelectorAll<HTMLDivElement>(".menu-item");

if (modal) {
  menuItems.forEach(item => {
    item.addEventListener("click", () => {
      modal.showModal();
    });
  });
}