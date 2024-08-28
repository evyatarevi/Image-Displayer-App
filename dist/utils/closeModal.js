export const closeModal = (event) => {
    const modalBackground = document.querySelector(".modal-background");
    const closeBtn = document.querySelector(".close-button");
    if (event.target === modalBackground || event.target === closeBtn) {
        modalBackground === null || modalBackground === void 0 ? void 0 : modalBackground.remove();
    }
};
