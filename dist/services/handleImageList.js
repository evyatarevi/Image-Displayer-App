var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchPhotos } from "../api/imagesApi.js";
import { createImageList } from "../components/ImageList.js";
import { createMoreImagesBtn } from "../components/MoreImagesBtn.js";
export const handleImageList = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const inputValue = (_a = document.querySelector(".user-input-search")) === null || _a === void 0 ? void 0 : _a.value;
    const photos = yield fetchPhotos(inputValue);
    const imageList = createImageList(photos);
    const moreImagesBtn = createMoreImagesBtn(photos, imageList);
    const previousImageList = document.querySelector(".image-list-container");
    const prevMoreImagesBtn = document.querySelector(".more-image-btn");
    previousImageList === null || previousImageList === void 0 ? void 0 : previousImageList.remove();
    prevMoreImagesBtn === null || prevMoreImagesBtn === void 0 ? void 0 : prevMoreImagesBtn.remove();
    const homeContainer = document.querySelector(".home-container");
    homeContainer === null || homeContainer === void 0 ? void 0 : homeContainer.appendChild(imageList);
    homeContainer === null || homeContainer === void 0 ? void 0 : homeContainer.appendChild(moreImagesBtn);
});
