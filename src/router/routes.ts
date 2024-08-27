import { createHomePage } from "../views/HomePage.js";

export const setupRouter = () => {
  window.addEventListener("load", createHomePage);
  window.addEventListener("hashchange", () => {
    const route = location.hash.slice(1);
    if (route === "home") {
      createHomePage();
    }
    // if (route === "favorites") {
    //   renderFavoritesView();
    // }
  });
};
