import React from "react";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";
const CharacterList = (props) => {
  const characterElements = props.characters.map((character) => {
    console.log(character);
    return (
      <li className="list__character" key={character.id}>
        <Link className="link" to={`/character/${character.id}`}>
          <CharacterCard character={character} />
        </Link>
      </li>
    );
  });

  if (props.characters.length === 0) {
    return <h2>No hay personajes</h2>;
  } else {
    return (
      <section>
        <ul className="list__cards">{characterElements}</ul>
      </section>
    );
  }
};
export default CharacterList;
