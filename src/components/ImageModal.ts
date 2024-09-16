import { closeModal } from "../utils/closeModal.js";

import { type PhotoType } from "../types/photoType.js";

export const createImageModal = (photo: PhotoType): HTMLDivElement => {
  const modalBackground = document.createElement("div");
  modalBackground.classList.add("modal-background");
  modalBackground.addEventListener("click", (event) => closeModal(event));

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  modalContent.id = `${photo.id}`;

  const closeBtn = document.createElement("div");
  closeBtn.classList.add("close-button");
  closeBtn.innerHTML = "&times;";
  closeBtn.addEventListener("click", (event) => closeModal(event));

  const modalImage = document.createElement("img");
  modalImage.src = `${photo.src.original}`;
  modalImage.alt = `${photo.alt}`;
  modalImage.classList.add("modal-image");

  const modalInfo = document.createElement("div");
  modalInfo.classList.add("modal-info");

  const modalDesc = document.createElement("p");
  modalDesc.classList.add("modal-desc");
  modalDesc.textContent = `${photo.alt}`;

  const modalUrl = document.createElement("a");
  modalUrl.href = `${photo.url}`;
  modalUrl.target = "_blank";
  modalUrl.classList.add("modal-url");
  modalUrl.textContent = "Visit Website";

  const modalPhotographer = document.createElement("p");
  modalPhotographer.classList.add("modal-photographer");
  modalPhotographer.textContent = `Photo by `;

  const photographerUrl = document.createElement("a");
  photographerUrl.href = `${photo.photographer_url}`;
  photographerUrl.target = "_blank";
  photographerUrl.textContent = `${photo.photographer}`;

  modalPhotographer.appendChild(photographerUrl);
  modalInfo.append(modalDesc, modalUrl, modalPhotographer);
  modalContent.append(closeBtn, modalImage, modalInfo);
  modalBackground.appendChild(modalContent);
  return modalBackground;
};
