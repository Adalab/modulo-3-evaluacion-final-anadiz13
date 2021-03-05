// componente que contiene el listado grande que de los 20 personajes. con lo que contiene la lista
import React from "react";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";
const CharacterList = (props) => {
  //const renderCharacters = () => {
  const characterElements = props.characters.map((character) => {
    //el map recojerael listado de usuarios y lo pintara

    console.log(character);
    return (
      <li key={character.id}>
        <Link className="link" to={`/character/${character.id}`}>
          <CharacterCard character={character} />
        </Link>
      </li>
    );
  });

  //character nombre de la prop = {character} valor del map
  if (props.characters.length === 0) {
    return <h2>No hay personajes</h2>;
  } else {
    return (
      <section>
        <ul className="list__cards">{characterElements}</ul>
      </section>
    );
  }
  /*return (
      <section className="pagina__personaje">
        <h2>Página de personajes</h2>
        <ul className="">{renderCharacters()}</ul>
      </section>
    );
  };*/
};
export default CharacterList;
