import { handleAddImages } from "../services/handleAddImages.js";

export const createMoreImagesBtn = (photos: [], imageList: HTMLElement) => {
  const btn = document.createElement("button");
  btn.textContent = "More Images";
  btn.classList.add("more-image-btn");
  btn.addEventListener("click", handleAddImages(photos, imageList));
  return btn;
};
