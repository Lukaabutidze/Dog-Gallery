"use client";
import { useState } from "react";
import React from "react";
import Selector from "./components/Selector";
import Button from "./components/Button";
import { fetchDogs } from "./actions";
import DogGallery from "./components/DogGallery";

const DogsPage = () => {
  const [numberOfDogs, setNumberOfDogs] = useState(1);
  const [dogImages, setDogImages] = useState([]);

  const handleFetch = async () => {
    setDogImages(await fetchDogs(numberOfDogs));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white dark:bg-gray-800">
      <Selector
        labelText="How many dogs to Fetch"
        handleChange={(e) => setNumberOfDogs(e.target.value)}
        value={numberOfDogs}
      />
      <Button buttonText="Fetch!" handleClick={handleFetch} />
      <DogGallery dogImages={dogImages} />
    </div>
  );
};

export default DogsPage;
