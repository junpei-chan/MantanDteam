const btns = document.querySelectorAll(".buttons button");
const dialog = document.getElementById("orderDeleteModalContainer") as HTMLDialogElement | null;

btns.forEach(btn => {
  btn.addEventListener("click", () => {
    dialog?.close();
  });
})