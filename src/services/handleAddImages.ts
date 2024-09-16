import { createImageCard } from "../components/ImageCard.js";
import { type PhotoType } from "../types/photoType.js";

export const handleAddImages = (
  photos: PhotoType[],
  imageList: HTMLElement
) => {
  let clickedCounter = 0;
  console.log(clickedCounter);
  return () => {
    clickedCounter++;
    const startIndex = clickedCounter * 10;
    for (let i = startIndex; i < startIndex + 9; i++) {
      const imageCard = createImageCard(photos[i]);
      imageList.appendChild(imageCard);
    }
  };
};
