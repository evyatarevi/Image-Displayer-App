import { fetchPhotos } from "../api/imagesApi.js";
import { createImageList } from "../components/ImageList.js";

export const handleImageList = async () => {
  const inputValue = (
    document.querySelector(".user-input-search") as HTMLInputElement
  )?.value;

  const photos = await fetchPhotos(inputValue);
  //   need to handle error
  const imageList = createImageList(photos);
  const homeContainer = document.querySelector(".home-container");
  if (homeContainer) {
    console.log("object");
    homeContainer.appendChild(imageList);
    console.log("object2");
  }
};
