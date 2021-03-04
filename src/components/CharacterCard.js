import React from "react";

const CharacterCard = (props) => {
  return (
    <>
      {/* añadir por aquí un Link que vaya /detail/props...id */}
      <img
        className="card__image"
        src={props.character.image}
        alt="foto del personaje"
      />
      <h2 className="card__title"> {props.character.name}</h2>
      <h4 className="card__type">{props.character.type}</h4>
    </>
  );
};
export default CharacterCard;
