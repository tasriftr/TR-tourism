import { json } from "react-router-dom";

export async function CardLoader() {
  try {
    const response = await fetch("https://example.com/api/data");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to load data", error);
    // Return null or some default value if there is an error
    return null;
  }
}
