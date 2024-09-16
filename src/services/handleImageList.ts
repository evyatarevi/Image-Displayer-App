import { fetchPhotos } from "../api/imagesApi.js";
import { createImageList } from "../components/ImageList.js";
import { createMoreImagesBtn } from "../components/MoreImagesBtn.js";

export const handleImageList = async (): Promise<void> => {
  const inputValue = (
    document.querySelector(".user-input-search") as HTMLInputElement
  )?.value;

  const photos = await fetchPhotos(inputValue);
  const imageList = createImageList(photos);
  const moreImagesBtn = createMoreImagesBtn(photos, imageList);

  const previousImageList = document.querySelector(".image-list-container");
  const prevMoreImagesBtn = document.querySelector(".more-image-btn");
  previousImageList?.remove();
  prevMoreImagesBtn?.remove();

  const homeContainer = document.querySelector(".home-container");
  homeContainer?.appendChild(imageList);
  homeContainer?.appendChild(moreImagesBtn);
};
