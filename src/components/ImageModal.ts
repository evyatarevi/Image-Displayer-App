import { closeModal } from "../utils/closeModal.js";

interface ImageDetails {
  id: string;
  alt: string;
  src: { original: string };
  url: string;
  photographer: string;
  photographer_url: string;
}

export const createImageModal = ({
  id,
  alt,
  src,
  url,
  photographer,
  photographer_url,
}: ImageDetails) => {
  const modalBackground = document.createElement("div");
  modalBackground.classList.add("modal-background");
  modalBackground.addEventListener("click", (event) => closeModal(event));

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  modalContent.id = `${id}`;

  const closeBtn = document.createElement("div");
  closeBtn.classList.add("close-button");
  closeBtn.innerHTML = "&times;";
  closeBtn.addEventListener("click", (event) => closeModal(event));

  const modalImage = document.createElement("img");
  modalImage.src = `${src.original}`;
  modalImage.alt = `${alt}`;
  modalImage.classList.add("modal-image");

  const modalInfo = document.createElement("div");
  modalInfo.classList.add("modal-info");

  const modalDesc = document.createElement("p");
  modalDesc.classList.add("modal-desc");
  modalDesc.textContent = `${alt}`;

  const modalUrl = document.createElement("a");
  modalUrl.href = `${url}`;
  modalUrl.target = "_blank";
  modalUrl.classList.add("modal-url");
  modalUrl.textContent = "Visit Website";

  const modalPhotographer = document.createElement("p");
  modalPhotographer.classList.add("modal-photographer");
  modalPhotographer.textContent = `Photo by `;

  const photographerUrl = document.createElement("a");
  photographerUrl.href = `${photographer_url}`;
  photographerUrl.target = "_blank";
  photographerUrl.textContent = `${photographer}`;

  modalPhotographer.appendChild(photographerUrl);
  modalInfo.append(modalDesc, modalUrl, modalPhotographer);
  modalContent.append(closeBtn, modalImage, modalInfo);
  modalBackground.appendChild(modalContent);
  return modalBackground;
};

// <div class="modal-content">
//   <span class="close-button">&times;</span>
//   <img src="${src.original}" alt="${alt}" id="${id}" class="modal-image" />
//   <div class="modal-info">
//     <a href="${url}" target="_blank" class="modal-url">
//       Visit Website
//     </a>
//     <p class="modal-photographer">
//       Photo by{" "}
//       <a href="${photographer_url}" target="_blank">
//         ${photographer}
//       </a>
//     </p>
//   </div>
// </div>;
