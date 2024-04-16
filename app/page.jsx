"use client";
import { useState } from "react";

import React from "react";
import Selector from "./components/Selector";
import Button from "./components/Button";

const handleFetch = async () => {};

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
    </div>
  );
};

export default DogsPage;
