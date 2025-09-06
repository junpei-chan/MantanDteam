const dialog = document.getElementById("MenuDetailModalContainer") as HTMLDialogElement | null;
const modalDetailModal = document.querySelector(".menu-detail-modal") as HTMLElement | null;
const menuDetailStepbarItems = document.querySelector(".menu-detail-stepbar-item") as NodeListOf<HTMLElement> | null;
const contents = document.querySelectorAll(".content") as NodeListOf<HTMLElement>;
const closeBtn = document.querySelector(".close-button") as HTMLElement | null;
const nextBtns = document.querySelectorAll(".next-button");
const backBtns = document.querySelectorAll(".back-button");

if (closeBtn && dialog) {
  closeBtn.addEventListener("click", () => {
    dialog.close();
  });
}

nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const currentBtn = document.querySelector(".content.current") as HTMLElement | null;

    if (!currentBtn) return;

    const currentItem = document.querySelector(".menu-detail-stepbar-item.current") as HTMLElement | null;

    if (!currentItem) return;

    currentItem.classList.remove("current");
    currentItem.classList.add("completed");
    currentItem.nextElementSibling?.classList.add("current");

    const next = currentBtn.nextElementSibling as HTMLElement | null;
    if (next && next.classList.contains("content")) {
      currentBtn.classList.remove("current");
      next.classList.add("current");
    }
  });
});

backBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const currentBtn = document.querySelector(".content.current") as HTMLElement | null;

    if (!currentBtn) return;
    
    const prev = currentBtn.previousElementSibling as HTMLElement | null;
    if (!prev?.classList.contains("content")) {
      dialog?.close();
      return;
    }

    if (prev && prev.classList.contains("content")) {
      currentBtn.classList.remove("current");
      prev.classList.add("current");
    }
  });
});