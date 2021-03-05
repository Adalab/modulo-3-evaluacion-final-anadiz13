const GetDataFromApi = () => {
  return fetch("//rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      //results es el array que contiene a todos los personajes
      return data.results.map((character) => {
        return {
          id: character.id,
          type: character.type,
          name: character.name,
          image: character.image,
          especie: character.especies,
        };
      });
    });
};
export default GetDataFromApi;
