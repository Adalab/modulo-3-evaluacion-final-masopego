import React from 'react';
import { randMCharacterAPI } from '../../services/RMServices';
import CharactersList from '../organisms/CharactersList';
import Filters from '../organisms/Filters';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      searchValue: '',
    };

    this.handleInputValue = this.handleInputValue.bind(this);
    this.filterCharactersList = this.filterCharactersList.bind(this);
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters() {
    randMCharacterAPI().then((data) => {
      this.setState({
        characters: data,
      });
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
      return characterList;
    }
    console.log(characterList);
    return characterList;
  }

  render() {
    return (
      <>
        <Filters
          onInputSearch={this.handleInputValue}
          value={this.state.searchValue}
        />
        <CharactersList list={this.filterCharactersList()} />
      </>
    );
  }
}

export default Board;
