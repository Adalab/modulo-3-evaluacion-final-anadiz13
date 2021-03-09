const GetDataFromApi = () => {
  return fetch("//rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      //results es el array que contiene a todos los personajes
      return data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          image: character.image,
          status: character.status,
          origin: character.origin.name,
          episode: character.episode,
          especies: character.species,
          location: character.location.name,
        };
      });
    });
};
export default GetDataFromApi;
