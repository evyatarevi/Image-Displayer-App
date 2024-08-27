import { createImageCard } from "./ImageCard.js";
export const createImageList = (photos) => {
    const imageList = document.createElement("section");
    imageList.classList.add("image-list-container");
    console.log(photos);
    for (let i = 0; i < 10; i++) {
        console.log("photo", photos[i]);
        const imageCard = createImageCard(photos[i]);
        imageList.appendChild(imageCard);
    }
    return imageList;
};
