import React from "react";

const PokeDetail = (props) => {
  return (
    <>
      <p>name:{props.name}</p>
      <ul>
        {props.abilityNames.map((abilityName) => (
          <li key={abilityName}>{abilityName}</li>
        ))}
      </ul>
      <img src={props.image} alt={`Imagen de ${props.name}`} />
    </>
  );
};

export default PokeDetail;
