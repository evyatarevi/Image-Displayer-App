import { fetchPhotos } from "../api/imagesApi.js";
import { createImageList } from "../components/ImageList.js";
import { createMoreImagesBtn } from "../components/MoreImagesBtn.js";

export const handleImageList = async () => {
  const inputValue = (
    document.querySelector(".user-input-search") as HTMLInputElement
  )?.value;

  const photos = await fetchPhotos(inputValue);
  //   need to handle error
  const imageList = createImageList(photos);
  const moreImagesBtn = createMoreImagesBtn(photos, imageList);

  const previousImageList = document.querySelector(".image-list-container");
  previousImageList?.remove();

  const homeContainer = document.querySelector(".home-container");
  homeContainer?.appendChild(imageList);
  homeContainer?.appendChild(moreImagesBtn);
};
