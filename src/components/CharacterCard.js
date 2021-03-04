import React from "react";

const CharacterCard = (props) => {
  return (
    <>
      <img
        className="card__image"
        src="https://rickandmortyapi.com/api/location/1"
        alt="foto del personaje"
      />
      <h2 className="card__title">Nombre</h2>
      <h4 className="card__type">Especie</h4>
    </>
  );
};
export default CharacterCard;
