import { fetchDogs } from "../actions";
import DogGallery from "../components/DogGallery";

const MAX_DOGS = 50;

export default async function DogsPage() {
  const dogs = await fetchDogs(MAX_DOGS);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white dark:bg-gray-800">
      <h2 class="text-lg text-gray-800 dark:text-gray-200 font-semibold mt-6">
        To see new dogs, do a hard refresh of the page by pressing command +
        shift + R
      </h2>
      <DogGallery dogImages={dogs} />
    </div>
  );
}
