import Parse from "parse";

// Function to fetch the list of desserts from Parse
export const getDesserts = async () => {
  const Dessert = Parse.Object.extend("Dessert"); // Your Parse class name
  const query = new Parse.Query(Dessert);

  try {
    const results = await query.find(); // Fetch all desserts from Parse
    return results.map((dessert) => ({
      id: dessert.id,
      imgName: dessert.get("imgName"),
      dessertDetails: dessert.get("dessertDesc"),
    }));
  } catch (error) {
    console.error("Error while fetching desserts: ", error);
    return []; // Return an empty array if there's an error
  }
};
  