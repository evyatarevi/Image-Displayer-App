import { setupRouter } from "./router/routes.js";
export const initializeApp = () => {
    setupRouter();
    console.log("App initialized");
};
