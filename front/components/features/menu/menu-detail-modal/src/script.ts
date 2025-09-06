const dialog = document.getElementById("MenuDetailModalContainer") as HTMLDialogElement | null;
const modalDetailModal = document.querySelector(".menu-detail-modal") as HTMLElement | null;
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
    const current = document.querySelector(".content.current") as HTMLElement | null;

    if (!current) return;

    const next = current.nextElementSibling as HTMLElement | null;

    if (next && next.classList.contains("content")) {
      current.classList.remove("current");
      next.classList.add("current");
    }
  });
});

backBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const current = document.querySelector(".content.current") as HTMLElement | null;

    if (!current) return;
    
    const prev = current.previousElementSibling as HTMLElement | null;

    if (!prev?.classList.contains("content")) {
      dialog?.close();
      return;
    }

    if (prev && prev.classList.contains("content")) {
      current.classList.remove("current");
      prev.classList.add("current");
    }
  });
});