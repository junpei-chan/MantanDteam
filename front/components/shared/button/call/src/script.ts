const callModal = document.getElementById("CallModalContainer") as HTMLDialogElement | null;
const btn = document.getElementById("CallBtn") as HTMLElement | null;

console.log(callModal, btn)

if (btn && callModal) {
  btn.addEventListener("click", () => {
    callModal.showModal();
  });
}