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
export const handleImageList = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const inputValue = (_a = document.querySelector(".user-input-search")) === null || _a === void 0 ? void 0 : _a.value;
    const photos = yield fetchPhotos(inputValue);
    //   need to handle error
    const imageList = createImageList(photos);
    const homeContainer = document.querySelector(".home-container");
    if (homeContainer) {
        console.log("object");
        homeContainer.appendChild(imageList);
        console.log("object2");
    }
});
