import React from 'react';
import PropTypes from 'prop-types';

class CharacterDetailCard extends React.Component {
  render() {
    const STATUS =
      this.props.status === 'Alive' ? (
        <i className="fas fa-heart"></i>
      ) : this.props.status === 'Dead' ? (
        <i className="fas fa-skull-crossbones"></i>
      ) : (
        <i className="fas fa-question"></i>
      );

    const SPECIES =
      this.props.species === 'Human' ? (
        <i className="fas fa-child"></i>
      ) : this.props.species === 'Alien' ? (
        <i className="fab fa-reddit-alien"></i>
      ) : (
        <i className="fas fa-question"></i>
      );

    return (
      <article>
        <img src={this.props.image} alt={this.props.title} />
        <h3>{this.props.title}</h3>
        <p>{SPECIES}</p>
        <p>{this.props.planet}</p>
        {this.props.episodes ? <p>{this.props.episodes}</p> : null}
        <p>{STATUS}</p>
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
