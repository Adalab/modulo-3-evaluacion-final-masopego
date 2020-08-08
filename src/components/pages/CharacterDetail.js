import React from 'react';
import { getCharacter } from '../../services/RMServices';
import CharacterDetailCard from '../molecules/CharacterDetailCard';
import { Link } from 'react-router-dom';
import { ROUTE_CHARACTERS } from '../../utils/constants';
class CharacterDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: null,
    };

    this.fetchCharacter = this.fetchCharacter.bind(this);
  }

  componentDidMount() {
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
      this.setState({ character: data });
    });
  }

  render() {
    const element = this.state.character;

    if (!element) {
      return 'Personaje no encontrado';
    }

    return (
      <>
        <CharacterDetailCard
          image={element.image}
          title={element.name}
          species={element.species}
          planet={element.location.name}
          episodes={element.episode.length}
          status={element.status}
        />
        <Link to={ROUTE_CHARACTERS}>Volver</Link>
      </>
    );
  }
}

export default CharacterDetail;
