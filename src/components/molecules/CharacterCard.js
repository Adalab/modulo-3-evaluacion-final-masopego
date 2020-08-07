import React from 'react';
import PropTypes from 'prop-types';

class CharacterCard extends React.Component {
  render() {
    return (
      <article>
        <img src={this.props.image} alt={this.props.title} />
        <h3>{this.props.title}</h3>
        <p>{this.props.species}</p>
      </article>
    );
  }
}

CharacterCard.defaultProps = {
  image: 'https://via.placeholder.com/150',
  title: 'Special Character',
  species: "I'm from a place called universe",
};

CharacterCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  species: PropTypes.string,
};

export default CharacterCard;
