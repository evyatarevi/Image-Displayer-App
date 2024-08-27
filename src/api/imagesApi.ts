// export const getImagesByName = async (name: string) => {
// try {
//   const response = await fetch(
//     "https://pixabay.com/api/?key=&q=yellow+flowers&image_type=photo&pretty=true"
//   );
//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }
//   const data = await response.json();
//   return data;
// } catch (error) {
//   // return error.message;
//   return error;
// }

// };

const API_KEY = "7H6pe5R2J7xQoZFcdw8FJQJ5qFfxjOQ0C9N2snxKqWODMiRdUb0B3dmP"; // Replace with your Pexels API key
const API_URL = "https://api.pexels.com/v1/search"; // Pexels API endpoint

// Function to fetch photos based on a search query
export const fetchPhotos = async (query: string) => {
  try {
    const response = await fetch(`${API_URL}?query=${query}&per_page=10`, {
      headers: {
        Authorization: API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("api happen");
    return data.photos; // This will contain the array of photos
  } catch (error) {
    console.error("Error fetching photos:", error);
  }
};

// Example usage
// fetchPhotos("nature").then((photos) => {
//   console.log(photos);
// });
