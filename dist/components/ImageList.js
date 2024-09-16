import { createImageCard } from "./ImageCard.js";
export const createImageList = (photos) => {
    const imageList = document.createElement("section");
    imageList.classList.add("image-list-container");
    for (let i = 0; i < 10; i++) {
        const imageCard = createImageCard(photos[i]);
        imageList.appendChild(imageCard);
    }
    return imageList;
};
