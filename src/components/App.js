import React, { useEffect, useState } from "react";
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
  const [especie, setEspecie] = useState("");
  // ("contendra el vslor unico de lo que escriba la usuaria") //usestate almacena el estado del componente. contiene unarray vacio hasta que nos lleguen los datos de la api

  //useffect se usa para la inicialización de variables, llamadas a APIs.un hook que recibe como parámetro una función que se ejecutará cada vez que nuestro componente se renderice, ya sea por un cambio de estado, por recibir props nuevas o, y esto es importante, porque es la primera vez que se monta.
  useEffect(() => {
    //console.log(getDataFromApi());
    GetDataFromApi().then((data) => setCharacters(data)); //son los datos que hemos limpiado y que le pasamos a la API. cuando lo tengo guardado en el estado se lo tengo quepasar al listado para que lo pinte por props.
  }, []); //paso el array vacio para que se ejecute una sola vez y no todo el rato
  const handleFilter = (inputChange) => { //targetName, targetValue
    if (inputChange ===`targetName`) {
      setName (inputChange.targetValue);    }
    else  (inputChange ==='targetEspecie'); {
      setEspecie(inputChange.targetValue);
  }

};
  const FilterCharacters = characters.filter((character) => {
    return character.name.toUpperCase().includes(name.toUpperCase());
  });

  {
    
    const renderCharacterDetail = (routerProps) =>  
    const id = props.match.params.id;
    const selectUser = users.find( user =>{
      return user.id === id;
    })
    return <UserDetail user ={selectUser}/>
  }
  }
  return (
    <>
      <h1 className="title__list">Listado de Personajes</h1>

      <div>
        <Header />
      </div>
      <div>
        {/* // ejercicios-en-clase-l >>> rutas dinamicas * renderiza el componente {renderCharacterDetail} cuando  la ruta cumpla el patron/character/:charactertId" */}
        <Switch>
          <Route path="/characters">
            <CharacterList characters={characters} />
          </Route>
          <Route
            path="/character/:charactertId"
            render={renderCharacterDetail}
          />
        </Switch>

        <Filters handleFilter={handleFilter} />
        <CharacterList characters={FilterCharacters} />
      </div>
    </>
  );
};

export default App;
