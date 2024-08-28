var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const API_KEY = "7H6pe5R2J7xQoZFcdw8FJQJ5qFfxjOQ0C9N2snxKqWODMiRdUb0B3dmP"; // Replace with your Pexels API key
const API_URL = "https://api.pexels.com/v1/search"; // Pexels API endpoint
// Function to fetch photos based on a search query
export const fetchPhotos = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`${API_URL}?query=${query}&per_page=10`, {
            headers: {
                Authorization: API_KEY,
            },
        });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = yield response.json();
        return data.photos; // This will contain the array of photos
    }
    catch (error) {
        console.error("Error fetching photos:", error);
    }
});
// Example usage
// fetchPhotos("nature").then((photos) => {
//   console.log(photos);
// });
