import React, { useState } from "react";
import PetList from "./PetList";
import PetDetail from "./PetDetail";

function PetApp() {
  const [selectedPet, setSelectedPet] = useState(null);

  const pets = [
    {
      id: "",
      name: "",
      dateOfBirth: "",
      breed: "",
    },
  ];

  const handlePetClick = (pet) => {
    setSelectedPet(pet);
  };

  return (
    <div>
      <h1>Pet Manager</h1>
      <PetList pets={pets} onPetClick={handlePetClick} />
    </div>
  );
}

export default PetApp;
