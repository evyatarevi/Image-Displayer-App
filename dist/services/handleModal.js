import { createImageModal } from "../components/ImageModal.js";
export const handleModal = (imageDetails) => {
    return () => {
        var _a;
        const modal = createImageModal(imageDetails);
        if (modal)
            console.log("modal", modal);
        (_a = document.getElementById("app")) === null || _a === void 0 ? void 0 : _a.appendChild(modal);
    };
};
