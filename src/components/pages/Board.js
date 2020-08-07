import React from 'react';
import { randMCharacterAPI } from '../../services/RMServices';
import CharactersList from '../organisms/CharactersList';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
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

  render() {
    return (
      <>
        <div className="Board">Hola Mundo</div>
        <CharactersList list={this.state.characters} />
      </>
    );
  }
}

export default Board;
