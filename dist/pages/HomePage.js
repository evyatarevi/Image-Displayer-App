import { createSearchBox } from "../components/SearchBox.js";
export const createHomePage = () => {
    var _a;
    const homePage = document.createElement("main");
    homePage.classList.add("home-container");
    const searchBox = createSearchBox();
    homePage.appendChild(searchBox);
    (_a = document.getElementById("app")) === null || _a === void 0 ? void 0 : _a.appendChild(homePage);
};
