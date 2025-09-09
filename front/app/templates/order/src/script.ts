import { FetchComponent } from "../../../utils/dist/fetch-component.js";

Promise.all([
  FetchComponent(
    "CallModalContainer", 
    "/components/features/menu/call-modal/src/index.html", 
    "callModal"
  ),
  FetchComponent(
    "callBtnContainer", 
    "/components/shared/button/call/src/index.html", 
    "CallBtn"
  )
]).then(() => {
  const dialog = document.getElementById("CallModalContainer") as HTMLDialogElement | null;
  if (dialog && typeof dialog.showModal === "function") {
    dialog.close();
  }
  if (dialog) {
    dialog.addEventListener("click", (e) => {
      if (e.target === dialog) {
        dialog.close();
      }
    });
  }

  const btn = document.getElementById("CallBtn") as HTMLElement | null;
  if (btn && dialog) {
    btn.addEventListener("click", () => {
      dialog.showModal();
    });
  }
});

FetchComponent(
  "backBtnContainer", 
  "/components/shared/button/back/src/index.html", 
  "BackBtn"
);

FetchComponent(
  "AccountingModalContainer", 
  "/components/features/menu/accounting-modal/src/index.html", 
  "accountingModal"
).then(() => {
  const dialog = document.getElementById("AccountingModalContainer") as HTMLDialogElement | null;
  
  if (dialog && typeof dialog.showModal === "function") {
    dialog.close();
  }

  if (dialog) {
    dialog.addEventListener("click", (e) => {
      if (e.target === dialog) {
        dialog.close();
      }
    });
  }
});

FetchComponent(
  "accountingBtnContainer", 
  "/components/shared/button/accounting/src/index.html", 
  "AccountingBtn"
);