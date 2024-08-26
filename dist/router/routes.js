import { renderHomeView } from "../views/HomeView.js";
export const setupRouter = () => {
    window.addEventListener("load", renderHomeView);
    //   window.addEventListener("hashchange", () => {
    //     const route = location.hash.slice(1);
    //     if (route === "home") {
    //       renderHomeView();
    //     }
    //   });
};
