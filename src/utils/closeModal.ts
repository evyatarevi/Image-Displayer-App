export const closeModal = (event: MouseEvent) => {
  const modalBackground = document.querySelector(".modal-background");
  const closeBtn = document.querySelector(".close-button");
  if (event.target === modalBackground || event.target === closeBtn) {
    modalBackground?.remove();
  }
};
