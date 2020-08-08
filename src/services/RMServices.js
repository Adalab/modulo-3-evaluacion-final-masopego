const ENDPOINT =
  'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json';

const getCharacters = () => {
  return fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    });
};

const getCharacter = (id) => {
  return fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => data.results.find((c) => c.id === id));
};

export { getCharacters, getCharacter };
