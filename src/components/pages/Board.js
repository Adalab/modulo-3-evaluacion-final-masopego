import React from 'react';
import { getCharacters } from '../../services/RMServices';
import CharactersList from '../organisms/CharactersList';
import Filters from '../organisms/Filters';

const EMULATE_LOW_REQUEST = 0;

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      searchValue: localStorage.getItem('localData') || '',
      isFetching: false,
    };

    this.handleInputValue = this.handleInputValue.bind(this);
    this.filterCharactersList = this.filterCharactersList.bind(this);
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  componentDidUpdate() {
    const userSearchInfo = this.state.searchValue;
    localStorage.setItem('localData', userSearchInfo);
  }

  fetchCharacters() {
    this.setState({ isFetching: true });
    getCharacters().then((data) => {
      setTimeout(() => {
        this.setState({
          characters: data,
          isFetching: false,
        });
      }, EMULATE_LOW_REQUEST);
    });
  }

  handleInputValue(inputValue) {
    this.setState({ searchValue: inputValue });
  }

  filterCharactersList() {
    let characterList = this.state.characters;
    if (this.state.searchValue !== '') {
      characterList = characterList.filter((character) =>
        character.name
          .toUpperCase()
          .includes(this.state.searchValue.toUpperCase())
      );
    }
    characterList.sort((a, b) => {
      const textA = a.name.toUpperCase();
      const textB = b.name.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
    return characterList;
  }

  render() {
    const list = this.filterCharactersList();
    if (this.state.isFetching) {
      return (
        <img
          src="https://media2.giphy.com/media/i2tLw5ZyikSFdkeGHT/giphy.gif"
          alt="Loading"
        ></img>
      );
    }
    return (
      <>
        <Filters
          onInputSearch={this.handleInputValue}
          value={this.state.searchValue}
        />
        {list.length > 0 ? (
          <CharactersList list={list} />
        ) : (
          <p>
            No he encontrado resultados para la búsqueda{' '}
            {this.state.searchValue}
          </p>
        )}
      </>
    );
  }
}

export default Board;
