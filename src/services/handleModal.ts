import { createImageModal } from "../components/ImageModal.js";
import { type PhotoType } from "../types/photoType.js";

export const handleModal = (photo: PhotoType): (() => void) => {
  return () => {
    const modal = createImageModal(photo);
    document.getElementById("app")?.appendChild(modal);
  };
};
