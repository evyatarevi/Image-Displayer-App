import { createSearchBox } from "../components/SearchBox.js";
export const createHomePage = () => {
    var _a, _b;
    (_a = document.querySelector(".home-container")) === null || _a === void 0 ? void 0 : _a.remove();
    const homePage = document.createElement("main");
    homePage.classList.add("home-container");
    const searchBox = createSearchBox();
    homePage.appendChild(searchBox);
    (_b = document.getElementById("app")) === null || _b === void 0 ? void 0 : _b.appendChild(homePage);
};
