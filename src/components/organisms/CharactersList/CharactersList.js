import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CharacterCard from "../../molecules/CharacterCard/CharacterCard";
import "./_charactersList.scss";

class CharactersList extends React.Component {
  constructor(props) {
    super(props);
    this.getCharacters = this.getCharacters.bind(this);
  }
  getCharacters() {
    let cardElements = this.props.list;
    return cardElements.map((element) => (
      <li key={element.id} className="characters__list--element">
        <Link to={`/character/${element.id}`}>
          <CharacterCard
            image={element.image}
            title={element.name}
            species={element.species}
          />
        </Link>
      </li>
    ));
  }
  render() {
    return (
      <>
        <ul className="characters__list">{this.getCharacters()}</ul>
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
