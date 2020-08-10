import React from "react";
import { getCharacter } from "../../../services/RMServices";
import CharacterDetailCard from "../../molecules/CharacterDetailCard/CharacterDetailCard";
import { Link } from "react-router-dom";
import { ROUTE_CHARACTERS } from "../../../utils/constants";
import "./_characterDetail.scss";
import Button from "../../atoms/button/button.js";
import NotFound from "../NotFound/NotFound.js";
import Loader from "../../atoms/loader/loader.js";

class CharacterDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: null,
      isFetching: false,
      nextCharacter: null,
      previousCharacter: null,
    };

    this.fetchCharacter = this.fetchCharacter.bind(this);
  }

  componentDidMount() {
    this.setState({ isFetching: true });
    this.fetchCharacter();
  }

  componentDidUpdate() {
    if (
      this.state.character &&
      parseInt(this.props.match.params.id) !== this.state.character.id
    ) {
      this.fetchCharacter();
    }
  }

  fetchCharacter() {
    const characterId = parseInt(this.props.match.params.id);
    getCharacter(characterId).then((data) => {
      this.setState({ character: data, isFetching: false });
    });
    getCharacter(characterId + 1).then((data) => {
      this.setState({ nextCharacter: data });
    });
    getCharacter(characterId - 1).then((data) => {
      this.setState({ previousCharacter: data });
    });
  }

  render() {
    const characterId = parseInt(this.props.match.params.id);
    const element = this.state.character;
    const isFetching = this.state.isFetching;

    if (isFetching) {
      return <Loader />;
    }
    if (!element) {
      return <NotFound />;
    }

    return (
      <section className="character__detail">
        <CharacterDetailCard
          image={element.image}
          title={element.name}
          species={element.species}
          planet={element.location.name}
          episodes={element.episode.length}
          status={element.status}
        />
        <ul className="character__detail--navigation">
          <li>
            {this.state.previousCharacter ? (
              <Link
                to={`/character/${characterId - 1}`}
                className="navigation--left"
              >
                <div className="image--preview">
                  <img
                    src={this.state.previousCharacter.image}
                    alt="Previous Character"
                  />
                  <p className="text--preview order-01">
                    {this.state.previousCharacter.name}
                  </p>
                </div>

                <Button
                  title={<i className="fas fa-arrow-left"></i>}
                  size="radius"
                  color="tertiary"
                />
              </Link>
            ) : null}
          </li>
          <li>
            {this.state.nextCharacter ? (
              <Link
                to={`/character/${characterId + 1}`}
                className="navigation--right"
              >
                <Button
                  title={<i className="fas fa-arrow-right"></i>}
                  size="radius"
                  color="tertiary"
                />
                <div className="image--preview">
                  <img
                    src={this.state.nextCharacter.image}
                    alt="Next Character"
                  />
                  <p className="text--preview">
                    {this.state.nextCharacter.name}
                  </p>
                </div>
              </Link>
            ) : null}
          </li>
        </ul>
        <Link to={ROUTE_CHARACTERS}>
          <Button size="large" title="Buscar otros personajes"></Button>
        </Link>
      </section>
    );
  }
}

export default CharacterDetail;
