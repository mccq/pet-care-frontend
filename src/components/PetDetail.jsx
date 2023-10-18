import React from "react";


function PetDetail({ pet }) {
    const cardStyle=  {
        marginTop:'3rem',
        backgroundColor: '#fff',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        maxWidth: '300px',
        margin: '0 auto'
      }
      
      const cardP = {
        margin: '10px 0',
        fontSize: '16px',
        lineHeight: '1.5',
        color: '#333'
      }




  return (
    <div style={cardStyle}>
      <h2>Pet Details</h2>
      <p style={cardP}>ID: {pet.id}</p>
      <p style={cardP}>Name: {pet.name}</p>
      <p style={cardP}>Date of Birth: {pet.dateOfBirth}</p>
      <p style={cardP}>Breed: {pet.breed}</p>
    </div>
  );
}

export default PetDetail;
