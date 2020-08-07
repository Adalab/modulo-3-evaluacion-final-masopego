const ENDPOINT =
  'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json';

const randMCharacterAPI = () => {
  return fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    });
};

export { randMCharacterAPI };
