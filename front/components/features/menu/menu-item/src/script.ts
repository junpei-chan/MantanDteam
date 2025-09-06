const modal = document.getElementById("MenuDetailModalContainer") as HTMLDialogElement | null;
const menuItems = document.querySelectorAll<HTMLDivElement>(".menu-item");

function resetMenuDetailModal() {
  const stepbarItems = document.querySelectorAll<HTMLElement>(".menu-detail-stepbar-item");
  stepbarItems.forEach((item, idx) => {
    item.classList.remove("current", "completed");
    if (idx === 0) {
      item.classList.add("current");
    }
  });

  const contents = document.querySelectorAll<HTMLElement>(".content");
  contents.forEach((content, idx) => {
    content.classList.remove("current");
    if (idx === 0) {
      content.classList.add("current");
    }
  });
}

if (modal) {
  menuItems.forEach(item => {
    item.addEventListener("click", () => {
      resetMenuDetailModal();
      modal.showModal();
    });
  });
}