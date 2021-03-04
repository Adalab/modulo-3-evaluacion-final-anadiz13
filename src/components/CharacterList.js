// componente que contiene el listado grande que de los 20 personajes. con lo que contiene la lista
import CharacterCard from "./CharacterCard";
const CharacterList = (props) => {
  return (
    <section>
      <ul className="list__cards">
        <li>
          <CharacterCard></CharacterCard>
        </li>
      </ul>
    </section>
  );
};
export default CharacterList;
