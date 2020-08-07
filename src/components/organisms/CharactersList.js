import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from '../molecules/CharacterCard';

class CharactersList extends React.Component {
  constructor(props) {
    super(props);
    this.getCharacters = this.getCharacters.bind(this);
  }
  getCharacters() {
    let cardElements = this.props.list;
    console.log(cardElements);
    return cardElements.map((element) => (
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

CharactersList.defaultProps = {
  list: [],
};
CharactersList.propTypes = {
  list: PropTypes.array,
};

export default CharactersList;
