import { handleModal } from "../services/handleModal.js";
export const createImageCard = (photo) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.addEventListener("click", handleModal(photo));
    const image = document.createElement("img");
    image.src = photo.src.original;
    image.alt = photo.alt;
    const content = document.createElement("div");
    content.classList.add("card-content");
    const idElement = document.createElement("h3");
    idElement.textContent = photo.id;
    const decElement = document.createElement("p");
    decElement.textContent = photo.alt;
    content.appendChild(idElement);
    content.appendChild(decElement);
    card.appendChild(image);
    card.appendChild(content);
    return card;
};
