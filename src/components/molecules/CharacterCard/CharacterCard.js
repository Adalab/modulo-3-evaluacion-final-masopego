import React from "react";
import PropTypes from "prop-types";
import "./_characterCard.scss";
class CharacterCard extends React.Component {
  render() {
    return (
      <article className="character">
        <img
          className="character__avatar"
          src={this.props.image}
          alt={this.props.title}
        />
        <h3 className="character__name">{this.props.title}</h3>
        <p className="character__specie">{this.props.species}</p>
      </article>
    );
  }
}

CharacterCard.defaultProps = {
  image: "https://via.placeholder.com/150",
  species: "Galactic",
};

CharacterCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  species: PropTypes.string,
};

export default CharacterCard;
