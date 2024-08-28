import { handleModal } from "../services/handleModal.js";

export const createImageCard = ({
  id,
  alt,
  src,
  url,
  photographer,
  photographer_url,
}: {
  id: string;
  alt: string;
  src: { original: string };
  url: string;
  photographer: string;
  photographer_url: string;
}): HTMLDivElement => {
  const imageDetails = { id, alt, src, url, photographer, photographer_url };

  const card = document.createElement("div");
  card.classList.add("card");
  card.addEventListener("click", handleModal(imageDetails));

  const image = document.createElement("img");
  image.src = src.original;
  image.alt = alt;

  const content = document.createElement("div");
  content.classList.add("card-content");

  const idElement = document.createElement("h3");
  idElement.textContent = id;

  const decElement = document.createElement("p");
  decElement.textContent = alt;

  content.appendChild(idElement);
  content.appendChild(decElement);

  card.appendChild(image);
  card.appendChild(content);

  return card;
};
