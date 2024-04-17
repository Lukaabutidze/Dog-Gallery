"use server";

export async function fetchDogs(numberofDogs) {
  try {
    const response = await fetch(
      `https://dog.ceo/api/breeds/image/random/${numberofDogs}`
    );
    if (!response.ok) {
      throw new Error("Network response for fetching was not OK!");
    }
    const data = await response.json();
    return data.message;
  } catch (error) {
    console.log(error);
    return [];
  }
}
