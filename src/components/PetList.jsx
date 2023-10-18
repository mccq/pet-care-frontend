import React, { useState, useEffect } from "react";
import PetDetail from "./PetDetail";

function PetList() {
  const [selectedPet, setSelectedPet] = useState(null);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/pets")
      .then((response) => response.json())
      .then((data) => setPets(data))
      .catch((error) => console.error("Erro ao buscar dados de pets:", error));
  }, []);

  const handlePetClick = (pet) => {
    setSelectedPet(pet);
  };

  return (
    <div>
      <h1>Pet List</h1>
      {pets.map((pet) => (
        <div
          key={pet.id}
          onClick={() => handlePetClick(pet)}
          style={{ margin: "5px", cursor: "pointer" }}
        >
          {pet.name}
        </div>
      ))}
      {selectedPet ? (
        <PetDetail pet={selectedPet} />
      ) : (
        <p>Select a pet to view details.</p>
      )}
    </div>
  );
}

export default PetList;
