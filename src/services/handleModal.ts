import { createImageModal } from "../components/ImageModal.js";

interface ImageDetails {
  id: string;
  alt: string;
  src: { original: string };
  url: string;
  photographer: string;
  photographer_url: string;
}

export const handleModal = (imageDetails: ImageDetails) => {
  return () => {
    const modal = createImageModal(imageDetails);
    if (modal) console.log("modal", modal);
    document.getElementById("app")?.appendChild(modal);
  };
};
