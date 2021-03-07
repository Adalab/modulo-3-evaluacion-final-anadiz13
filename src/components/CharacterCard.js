import React from "react";

const CharacterCard = (props) => {
  return (
    <>
      <img
        className="card__image"
        src={props.character.image}
        alt="foto del personaje"
      />
      <h2 className="card__title"> {props.character.name}</h2>
      <h4 className="card__description">{props.character.species}</h4>
    </>
  );
};
export default CharacterCard;
