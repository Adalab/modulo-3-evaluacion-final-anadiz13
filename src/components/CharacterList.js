// componente que contiene el listado grande que de los 20 personajes. con lo que contiene la lista
import CharacterCard from "./CharacterCard";
const CharacterList = (props) => {
  const characterElements = props.characters.map((character) => {
    //el map recojerael listado de usuarios y lo pintara
    console.log(character);
    return (
      <li key={character.id}>
        <CharacterCard character={character} />
      </li>
    );
  });
  //character nombre de la prop = {character} valor del map
  if (props.characters.length === 0) {
    return "No hay personajes";
  } else {
    return (
      <section>
        <ul className="list__cards">{characterElements}</ul>
      </section>
    );
  }
};
export default CharacterList;
