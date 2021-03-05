import React from "react";

const CharacterDetail = (props) => {
  console.log(props.character);
  return (
    <section className="character__detail">
      <article className="">
        <img
          className="detail__img"
          src={props.character.image}
          alt={`Imagen de ${props.character.name}`}
        />
        <h3 className="card__title">Name{props.character.name}</h3>
        <p className="card__description">Tipo: {props.character.type}</p>
        <p className="card__description">Estatus: {props.character.status}</p>
        <p className="card__description">Origen: {props.character.origin}</p>
        <p className="card__description">
          Episodios: {props.character.episodes}
        </p>
      </article>
    </section>
  );
};
export default CharacterDetail;
