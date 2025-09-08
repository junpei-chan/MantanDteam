import { FetchComponent } from "../../../utils/dist/fetch-component.js";
Promise.all([
    FetchComponent("CallModalContainer", "/components/features/menu/call-modal/src/index.html", "callModal"),
    FetchComponent("callBtnContainer", "/components/shared/button/call/src/index.html", "CallBtn")
]).then(() => {
    const dialog = document.getElementById("CallModalContainer");
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
    const btn = document.getElementById("CallBtn");
    if (btn && dialog) {
        btn.addEventListener("click", () => {
            dialog.showModal();
        });
    }
});
FetchComponent("backBtnContainer", "/components/shared/button/back/src/index.html", "BackBtn");
