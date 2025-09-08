const callCancelBtn = document.getElementById("cancelBtn") as HTMLElement | null;
const callDialog = document.getElementById("CallModalContainer") as HTMLDialogElement | null;
const callBtns = document.querySelectorAll(".call-buttons button") as NodeListOf<HTMLButtonElement>;
const callContent = document.querySelector(".call") as HTMLElement | null;
const standbyContent = document.querySelector(".standby") as HTMLElement | null;

if (callCancelBtn && callDialog) {
  callCancelBtn.addEventListener("click", () => {
    callDialog.close();
  });
}

if (callDialog && callContent && standbyContent) {
  const observer = new MutationObserver(() => {
    if (callDialog.open) {
      callContent.style.removeProperty('display');
      standbyContent.style.display = "none";
    }
  });
  observer.observe(callDialog, { attributes: true, attributeFilter: ["open"] });
}

if (callContent && standbyContent) {
  callBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      callContent.style.display = "none";
      standbyContent.style.display = "flex";

      setTimeout(() => {
        callDialog?.close();
      }, 1500);
    });
  });
}