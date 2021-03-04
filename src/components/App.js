import React from "react";
import Header from "./Header";
import photo from "../images/RickandMorty.jpeg";
import "../stylesheets/App.scss";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import GetDataFromApi from "../services/getDataFromApi";

const App = () => {
  return (
    <>
      <h1 className="title__list">Listado de Personajes</h1>

      <div>
        <Header />
        <img src={photo} />
      </div>
      <div>
        <Filters />
        <CharacterList />
      </div>
    </>
  );
};

export default App;
