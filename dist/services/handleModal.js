import { createImageModal } from "../components/ImageModal.js";
export const handleModal = (photo) => {
    return () => {
        var _a;
        const modal = createImageModal(photo);
        (_a = document.getElementById("app")) === null || _a === void 0 ? void 0 : _a.appendChild(modal);
    };
};
