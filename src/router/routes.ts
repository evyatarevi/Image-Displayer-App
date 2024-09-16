import { createHomePage } from "../pages/HomePage.js";

export const setupRouter = () => {
  document.addEventListener("DOMContentLoaded", createHomePage);
  window.addEventListener("hashchange", () => {
    const route = location.hash.slice(1);
    if (route === "home") {
      createHomePage();
    }
    // if (route === "favorites") {
    //   createFavoritesPage();
    // }
  });
};
