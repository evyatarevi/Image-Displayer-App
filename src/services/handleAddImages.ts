import { createImageCard } from "../components/ImageCard.js";

export const handleAddImages = (photos: [], imageList: HTMLElement) => {
  let clickedCounter = 0;
  return () => {
    clickedCounter++;
    const startIndex = clickedCounter * 10;
    for (let i = startIndex; i < startIndex + 9; i++) {
      const imageCard = createImageCard(photos[i]);
      imageList.appendChild(imageCard);
    }
  };
};
