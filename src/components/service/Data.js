const dataApi = () => {
  return fetch('https://hp-api.onrender.com/api/characters/house/gryffindor')
    .then((response) => response.json())
    .then((data) => {
      const rightData = data.map((character) => {
        return {
          id: character.id,
          name: character.name,
          species: character.species,
          gender: character.gender,
          alive: character.alive,
          house: character.house,
        };
      });

      return rightData;
    });
};

export default dataApi;
