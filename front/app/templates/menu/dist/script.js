import { FetchComponent } from "../../../utils/dist/fetch-component.js";
const menuItemCount = 6;
let isTakeoutMode = false;
function toggleMenuItems() {
    isTakeoutMode = !isTakeoutMode;
    for (let i = 0; i < menuItemCount; i++) {
        const liId = `MenuItem${i}`;
        FetchComponent(liId, "/components/features/menu/menu-item/src/index.html", isTakeoutMode ? "TakeoutMenuItem" : "MenuItem");
    }
}
function renderMenuItems() {
    const container = document.getElementById("MenuItemContainer");
    if (!container)
        return;
    container.innerHTML = "";
    for (let i = 0; i < menuItemCount; i++) {
        const li = document.createElement("li");
        li.id = `MenuItem${i}`;
        container.appendChild(li);
        FetchComponent(li.id, "/components/features/menu/menu-item/src/index.html", "MenuItem");
    }
}
document.addEventListener("DOMContentLoaded", () => {
    renderMenuItems();
});
FetchComponent("TakeoutBtnContainer", "/components/shared/button/takeout/src/index.html", "TakeoutBtn").then(() => {
    const takeoutBtn = document.getElementById("TakeoutBtn");
    if (takeoutBtn) {
        takeoutBtn.addEventListener("click", () => {
            toggleMenuItems();
        });
    }
});
FetchComponent("AccountingBtnContainer", "/components/shared/button/accounting/src/index.html", "AccountingBtn");
FetchComponent("CallBtnContainer", "/components/shared/button/call/src/index.html", "CallBtn");
FetchComponent("OrderBtnContainer", "/components/shared/button/order/src/index.html", "OrderBtn");
FetchComponent("OrderHistoryBtnContainer", "/components/shared/button/order-history/src/index.html", "OrderHistoryBtn");
FetchComponent("CategoryMenuContainer", "/components/features/menu/category-menu/src/index.html", "CategoryMenu");
FetchComponent("TakeoutCategoryMenuContainer", "/components/features/menu/category-menu/src/index.html", "TakeoutCategoryMenu");
FetchComponent("MenuDetailModalContainer", "/components/features/menu/menu-detail-modal/src/index.html", "MenuDetailModal");
