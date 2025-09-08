const accountingModal = document.getElementById("AccountingModalContainer") as HTMLDialogElement | null;
const btn = document.getElementById("AccountingBtn") as HTMLElement | null;

if (btn && accountingModal) {
  btn.addEventListener("click", () => {
    console.log("test")
    accountingModal.showModal();
  });
}