const backBtn = document.getElementById("backBtn") as HTMLElement | null;
const accountingDialog = document.getElementById("AccountingModalContainer") as HTMLDialogElement | null;

if (backBtn && accountingDialog) {
  backBtn.addEventListener("click", () => {
    accountingDialog.close();
  });
}