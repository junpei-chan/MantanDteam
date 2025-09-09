import { FetchComponent } from "../../../utils/dist/fetch-component.js";
Promise.all([
    FetchComponent("CallModalContainer", "/components/features/menu/call-modal/src/index.html", "callModal"),
    FetchComponent("CallBtnContainer", "/components/shared/button/call/src/index.html", "CallBtn")
]).then(() => {
    const dialog = document.getElementById("CallModalContainer");
    if (dialog && typeof dialog.showModal === "function") {
        dialog.close();
    }
    if (dialog) {
        dialog.addEventListener("click", (e) => {
            if (e.target === dialog)
                dialog.close();
        });
    }
    const btn = document.getElementById("CallBtn");
    if (btn instanceof HTMLElement && dialog) {
        btn.addEventListener("click", () => dialog.showModal());
    }
});
FetchComponent("backBtnContainer", "/components/shared/button/back/src/index.html", "BackBtn");
FetchComponent("AccountingModalContainer", "/components/features/menu/accounting-modal/src/index.html", "accountingModal").then(() => {
    const dialog = document.getElementById("AccountingModalContainer");
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
FetchComponent("accountingBtnContainer", "/components/shared/button/accounting/src/index.html", "AccountingBtn");
FetchComponent("orderDeleteModalContainer", "/components/features/order/order-delete-modal/src/index.html", "orderDeleteModal").then(() => {
    const dialog = document.getElementById("orderDeleteModalContainer");
    document.addEventListener("click", (e) => {
        if (!dialog)
            return;
        const target = e.target;
        if (target && target.closest && target.closest(".delete-button")) {
            if (typeof dialog.showModal === "function") {
                dialog.showModal();
            }
        }
    });
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
