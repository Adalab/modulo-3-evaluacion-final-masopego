import React from 'react';
import PropTypes from 'prop-types';

class CharacterDetailCard extends React.Component {
  render() {
    return (
      <article>
        <img src={this.props.image} alt={this.props.title} />
        <h3>{this.props.title}</h3>
        <p>{this.props.species}</p>
        <p>{this.props.planet}</p>
        {this.props.episodes ? <p>{this.props.episodes}</p> : null}
        <p>{this.props.status}</p>
      </article>
    );
  }
}

CharacterDetailCard.defaultProps = {
  image: 'https://via.placeholder.com/150',
  species: 'Galactic',
  planet: "I'm from a place called universe",
  episodes: 30,
  status: "I'm here",
};

CharacterDetailCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  species: PropTypes.string,
  planet: PropTypes.string,
  episodes: PropTypes.number,
  status: PropTypes.string,
};

export default CharacterDetailCard;
