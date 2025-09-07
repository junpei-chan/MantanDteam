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

    const currentItem = document.querySelector(".menu-detail-stepbar-item.current") as HTMLElement | null;

    if (!currentItem) return;

    currentItem.classList.remove("current");
    currentItem.previousElementSibling?.classList.remove("completed");
    currentItem.previousElementSibling?.classList.add("current");
    
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

document.querySelectorAll(".options-contents ul li").forEach(li => {
  const input = li.querySelector("input[type='checkbox']") as HTMLInputElement | null;

  if (input) {
    input.addEventListener("click", (e) => {
      e.stopPropagation();
      if (input.checked) {
        li.classList.add("checked");
      } else {
        li.classList.remove("checked");
      }
    });

    li.addEventListener("click", (e) => {
      if (e.target === input) return;
      input.checked = !input.checked;
      li.classList.toggle("checked", input.checked);
    });
  }
});


function updateQuantityButtonDisplay() {
  document.querySelectorAll(".quantity-button").forEach(quantityButton => {
    const minusBtn = quantityButton.querySelector('button:first-of-type') as HTMLButtonElement | null;
    const plusBtn = quantityButton.querySelector('button:last-of-type') as HTMLButtonElement | null;
    const quantityP = quantityButton.querySelector('p') as HTMLParagraphElement | null;
    if (!minusBtn || !plusBtn || !quantityP) return;

    const value = parseInt(quantityP.textContent || "1", 10);

    if (value <= 1) {
      minusBtn.style.visibility = "hidden";
      plusBtn.style.visibility = "visible";
    } else if (value >= 9) {
      minusBtn.style.visibility = "visible";
      plusBtn.style.visibility = "hidden";
    } else {
      minusBtn.style.visibility = "visible";
      plusBtn.style.visibility = "visible";
    }
  });
}

updateQuantityButtonDisplay();

document.querySelectorAll(".quantity-button").forEach(qb => {
  const minusBtn = qb.querySelector('button:first-of-type');
  const plusBtn = qb.querySelector('button:last-of-type');
  const quantityP = qb.querySelector('p');
  if (!minusBtn || !plusBtn || !quantityP) return;

  minusBtn.addEventListener("click", () => {
    let value = parseInt(quantityP.textContent || "1", 10);
    if (value > 1) {
      value--;
      quantityP.textContent = value.toString();
      updateQuantityButtonDisplay();
    }
  });

  plusBtn.addEventListener("click", () => {
    let value = parseInt(quantityP.textContent || "1", 10);
    if (value < 9) {
      value++;
      quantityP.textContent = value.toString();
      updateQuantityButtonDisplay();
    }
  });
});
