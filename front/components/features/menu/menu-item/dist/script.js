"use strict";
const modal = document.getElementById("MenuDetailModalContainer");
const menuItems = document.querySelectorAll(".menu-item");
function resetMenuDetailModal() {
    let stepbar = document.querySelector(".menu-detail-stepbar");
    if (!stepbar) {
        const stepbarContainer = document.querySelector('.menu-detail-modal > div');
        if (stepbarContainer) {
            stepbarContainer.insertAdjacentHTML('afterbegin', `
        <div class="menu-detail-stepbar">
          <div class="menu-detail-stepbar-item current">
            <img src="/assets/images/icons/bottom-arrow-icon.svg" alt="arrow-icon">
            <button id="menuSelect">
              <span>1</span>
              <img src="/assets/images/icons/check-icon.svg" alt="check-icon">
            </button>
            <label for="menuSelect">メニュー選択</label>
          </div>
          <div class="menu-detail-stepbar-item">
            <img src="/assets/images/icons/bottom-arrow-icon.svg" alt="arrow-icon">
            <button id="optionSelect">
              <span>2</span>
              <img src="/assets/images/icons/check-icon.svg" alt="check-icon">
            </button>
            <label for="optionSelect">オプション選択</label>
          </div>
          <div class="menu-detail-stepbar-item">
            <img src="/assets/images/icons/bottom-arrow-icon.svg" alt="arrow-icon">
            <button id="quantitySelect">
              <span>3</span>
              <img src="/assets/images/icons/check-icon.svg" alt="check-icon">
            </button>
            <label for="quantitySelect">数量選択</label>
          </div>
        </div>
      `);
        }
        stepbar = document.querySelector(".menu-detail-stepbar");
    }
    if (stepbar) {
        stepbar.style.display = "";
    }
    const stepbarItems = document.querySelectorAll(".menu-detail-stepbar-item");
    stepbarItems.forEach((item, idx) => {
        item.classList.remove("current", "completed");
        if (idx === 0) {
            item.classList.add("current");
        }
    });
    const contents = document.querySelectorAll(".content");
    contents.forEach((content, idx) => {
        content.classList.remove("current");
        if (idx === 0) {
            content.classList.add("current");
        }
    });
}
if (modal) {
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            resetMenuDetailModal();
            modal.showModal();
        });
    });
}
