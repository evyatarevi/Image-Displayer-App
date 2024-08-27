import { handleImageList } from "../services/handleImageList.js";

export const createSearchBox = () => {
  const searchBox = document.createElement("section");
  searchBox.classList.add("search-box");

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.classList.add("user-input-search");
  searchInput.placeholder = "Search";

  const searchButton = document.createElement("button");
  searchButton.type = "button";
  searchButton.textContent = "Search";
  searchButton.addEventListener("click", handleImageList);

  searchBox.appendChild(searchInput);
  searchBox.appendChild(searchButton);

  return searchBox;
};
