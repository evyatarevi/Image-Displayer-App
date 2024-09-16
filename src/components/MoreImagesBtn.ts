import { handleAddImages } from "../services/handleAddImages.js";
import { type PhotoType } from "../types/photoType.js";

export const createMoreImagesBtn = (
  photos: PhotoType[],
  imageList: HTMLElement
): HTMLElement => {
  const btn = document.createElement("button");
  btn.textContent = "More Images";
  btn.classList.add("more-image-btn");
  btn.addEventListener("click", handleAddImages(photos, imageList));
  return btn;
};
