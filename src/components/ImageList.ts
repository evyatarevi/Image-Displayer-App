import { createImageCard } from "./ImageCard.js";
import { type PhotoType } from "../types/photoType.js";

export const createImageList = (photos: PhotoType[]): HTMLElement => {
  const imageList = document.createElement("section");
  imageList.classList.add("image-list-container");
  for (let i = 0; i < 10; i++) {
    const imageCard = createImageCard(photos[i]);
    imageList.appendChild(imageCard);
  }
  return imageList;
};
