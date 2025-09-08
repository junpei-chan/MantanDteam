const callCancelBtn = document.getElementById("cancelBtn") as HTMLElement | null;
const callDialog = document.getElementById("CallModalContainer") as HTMLDialogElement | null;

if (callCancelBtn && callDialog) {
  callCancelBtn.addEventListener("click", () => {
    callDialog.close();
  });
}