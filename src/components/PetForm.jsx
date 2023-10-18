import { useState } from "react";

function PetForm() {
  const inputStyle = {
    margin: ".5rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "8px",
    width: "200px",
    textAlign: 'center'
  };

  const buttonStyle={
    marginTop: "1rem",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    cursor: "pointer",
  }

  const [pet, setPet] = useState({
    name: "",
    dateOfBirth: "",
    breed: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPet({ ...pet, [name]: value });
  };

  const handleAddPet = () => {
    fetch("http://localhost:8000/api/pets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pet),
    })
      .then((response) => {
        if (response.status === 201) {
          console.log("Pet adicionado com sucesso!");
          setPet({ name: "", dateOfBirth: "", breed: "" });
        } else {
          console.error("Falha ao adicionar o pet.");
        }
      })
      .catch((error) => {
        console.error("Erro ao adicionar o pet:", error);
      });
  };

  return (
    <>
      <h1>Pet Form</h1>
      <input
        type="text"
        name="name"
        placeholder="Nome"
        value={pet.name}
        onChange={handleInputChange}
        style={inputStyle}
      />
      <input
        type="text"
        name="dateOfBirth"
        placeholder="Data de Nascimento"
        value={pet.dateOfBirth}
        onChange={handleInputChange}
        style={inputStyle}
      />
      <input
        type="text"
        name="breed"
        placeholder="Raça"
        value={pet.breed}
        onChange={handleInputChange}
        style={inputStyle}
      />
      <div>
        <button style={buttonStyle} onClick={handleAddPet}>Add Pet</button>
      </div>
    </>
  );
}

export default PetForm;
