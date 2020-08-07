import React from 'react';
import CharacterCard from '../molecules/CharacterCard';

class CharactersList extends React.Component {
  constructor(props) {
    super(props);
    this.getCharacters = this.getCharacters.bind(this);
  }
  getCharacters() {
    let cardElements = this.props.list;
    console.log(cardElements);
    return cardElements.map((element, id) => (
      <li key={element.id}>
        <CharacterCard
          image={element.image}
          title={element.name}
          species={element.species}
        />
      </li>
    ));
  }
  render() {
    return (
      <>
        <ul>{this.getCharacters()}</ul>
      </>
    );
  }
}

export default CharactersList;
