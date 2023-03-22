const dataApi = (value) => {
  return fetch(`https://hp-api.onrender.com/api/characters/house/${value}`)
    .then((response) => response.json())
    .then((data) => {
      const rightData = data.map((character) => {
        return {
          id: character.id,
          image: character.image,
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
