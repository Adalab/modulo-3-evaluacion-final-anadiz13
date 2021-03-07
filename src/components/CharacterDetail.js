import React from "react";
import { Link } from "react-router-dom";
const CharacterDetail = (props) => {
  console.log(props.character);
  return (
    <section className="character__detail">
      <Link className="link__return" to="/">
        Volver
      </Link>
      <article className="">
        <img
          className="detail__img"
          src={props.character.image}
          alt={`Imagen de ${props.character.name}`}
        />
        <h3 className="card__title">Name{props.character.name}</h3>
        <p className="card__description">Estatus{props.character.status}</p>

        <p className="card__description">Origen{props.character.origin}</p>
        <p className="card__description">
          Episodios: {props.character.episode.length}
        </p>
        <p className="card__description">Especie{props.character.especies}</p>
      </article>
    </section>
  );
};
export default CharacterDetail;
