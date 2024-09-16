import { createSearchBox } from "../components/SearchBox.js";

export const createHomePage = () => {
  document.querySelector(".home-container")?.remove();
  const homePage = document.createElement("main");
  homePage.classList.add("home-container");
  const searchBox = createSearchBox();
  homePage.appendChild(searchBox);
  document.getElementById("app")?.appendChild(homePage);
};
