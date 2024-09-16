import { createImageCard } from "../components/ImageCard.js";
export const handleAddImages = (photos, imageList) => {
    let clickedCounter = 0;
    console.log(clickedCounter);
    return () => {
        clickedCounter++;
        const startIndex = clickedCounter * 10;
        for (let i = 0; i < startIndex + 9; i++) {
            const imageCard = createImageCard(photos[i]);
            imageList.appendChild(imageCard);
        }
    };
};
