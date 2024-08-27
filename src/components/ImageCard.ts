export const createImageCard = ({
  id,
  alt,
  src,
}: {
  id: string;
  alt: string;
  src: { original: string };
}): HTMLDivElement => {
  const card = document.createElement("div");
  card.classList.add("card");

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
