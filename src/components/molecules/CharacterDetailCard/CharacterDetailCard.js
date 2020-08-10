import React from "react";
import PropTypes from "prop-types";
import "./_characterDetailCard.scss";
import rick from "../../../images/rick.png";
import heart from "../../../images/heart.svg";
import bones from "../../../images/bones.svg";
import alien from "../../../images/alien.svg";
import question from "../../../images/question.svg";

class CharacterDetailCard extends React.Component {
  render() {
    const STATUS =
      this.props.status === "Alive" ? (
        <img src={heart} alt="Alive" />
      ) : this.props.status === "Dead" ? (
        <img src={bones} alt="Dead" />
      ) : (
        <img src={question} alt="Known" />
      );

    const SPECIES =
      this.props.species === "Human" ? (
        <img src={rick} alt="Human" />
      ) : this.props.species === "Alien" ? (
        <img src={alien} alt="Alien" />
      ) : (
        <img src={question} alt="Unknown" />
      );

    return (
      <article className="character__card">
        <div className="character__card--left">
          <img
            className="character__card--avatar"
            src={this.props.image}
            alt={this.props.title}
          />
        </div>
        <div className="character__card--right">
          <h2 className="character__card--title">{this.props.title}</h2>
          <p className="character__card--planet">{this.props.planet}</p>
          <div className="character__card--icons">
            <div className="icon-wrapper">
              <span className="icon icon-specie">{SPECIES}</span>

              <p className="legend">{this.props.species}</p>
            </div>
            {this.props.episodes ? (
              <div className="icon-wrapper">
                <span className="icon icon-specie">{this.props.episodes}</span>

                <p className="legend">Episodios</p>
              </div>
            ) : null}
            <div className="icon-wrapper">
              <span className="icon icon-specie">{STATUS}</span>

              <p className="legend">{this.props.status}</p>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

CharacterDetailCard.defaultProps = {
  image: "https://via.placeholder.com/150",
  species: "Galactic",
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
