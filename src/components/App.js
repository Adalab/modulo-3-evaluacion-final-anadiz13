import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import "../stylesheets/App.scss";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import GetDataFromApi from "../services/GetDataFromApi";
import CharacterDetail from "./CharacterDetail";
import { Route, Switch } from "react-router-dom";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState("");
  const [specie, setEspecie] = useState("");

  useEffect(() => {
    GetDataFromApi().then((data) => setCharacters(data));
  }, []);
  const handleFilter = (inputChange, targetValue) => {
    console.log(inputChange, targetValue);
    if (inputChange === `name`) {
      setName(targetValue);
    } else if (inputChange === "specie") {
      setEspecie(targetValue);
    }
  };
  const FilterCharacters = characters
    .filter((character) => {
      return character.name.toUpperCase().includes(name.toUpperCase());
    })
    .sort(function (a, z) {
      if (a.name > z.name) {
        return 1;
      } else if (a.name < z.name) {
        return -1;
      }
      return 0;
    })
    .filter((character) => {
      return character.especies.toUpperCase().includes(specie.toUpperCase());
    });

  console.log(FilterCharacters);

  const renderCharacterDetail = (routerProps) => {
    const id = routerProps.match.params.charactertId;
    const selectCharacter = characters.find((character) => {
      return character.id === parseInt(id);
    });
    return <CharacterDetail character={selectCharacter} />;
  };

  return (
    <>
      <h1 className="title__list">Listado de Personajes</h1>

      <div>
        <Header />
      </div>
      <div>
        <Switch>
          <Route exact path="/">
            <Filters name={name} handleFilter={handleFilter} />
            <CharacterList characters={FilterCharacters} />
          </Route>
          <Route
            path="/character/:charactertId"
            render={renderCharacterDetail}
          />
        </Switch>
      </div>
    </>
  );
};

export default App;
