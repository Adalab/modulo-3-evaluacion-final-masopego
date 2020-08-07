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

  render() {
    return (
      <>
        <div className="Board">Hola Mundo</div>
        <Filters
          onInputSearch={this.handleInputValue}
          value={this.state.searchValue}
        />
        <CharactersList list={this.state.characters} />
      </>
    );
  }
}

export default Board;
