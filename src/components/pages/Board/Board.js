import React from "react";
import { getCharacters } from "../../../services/RMServices";
import CharactersList from "../../organisms/CharactersList/CharactersList.js";
import Filters from "../../organisms/Filters/Filters";
import Loader from "../../atoms/loader/loader.js";
import Footer from "../../organisms/Footer/Footer.js";
import "./_board.scss";

const EMULATE_LOW_REQUEST = 2500;

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      searchValue: localStorage.getItem("localData") || "",
      isFetching: false,
    };

    this.handleInputValue = this.handleInputValue.bind(this);
    this.filterCharactersList = this.filterCharactersList.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  componentDidUpdate() {
    const userSearchInfo = this.state.searchValue;
    localStorage.setItem("localData", userSearchInfo);
  }

  fetchCharacters() {
    this.setState({ isFetching: true });
    getCharacters().then((data) => {
      setTimeout(() => {
        this.setState({
          characters: data,
          isFetching: false,
        });
      }, EMULATE_LOW_REQUEST);
    });
  }

  handleInputValue(inputValue) {
    this.setState({ searchValue: inputValue });
  }

  resetSearch() {
    return this.setState({ searchValue: "" });
  }

  filterCharactersList() {
    let characterList = this.state.characters;
    if (this.state.searchValue !== "") {
      characterList = characterList.filter((character) =>
        character.name
          .toUpperCase()
          .includes(this.state.searchValue.toUpperCase())
      );
    }
    characterList.sort((a, b) => {
      const textA = a.name.toUpperCase();
      const textB = b.name.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
    return characterList;
  }

  render() {
    const list = this.filterCharactersList();
    if (this.state.isFetching) {
      return <Loader />;
    }
    return (
      <>
        <section className="board">
          <Filters
            onInputSearch={this.handleInputValue}
            value={this.state.searchValue}
            resetSearch={this.resetSearch}
          />
          {list.length > 0 ? (
            <CharactersList list={list} />
          ) : (
            <p className="not-results">
              En este universo no hemos encontrado un personaje llamado{" "}
              {this.state.searchValue.toUpperCase()}.{" "}
              <span>¡Prueba de nuevo! </span>
            </p>
          )}
        </section>
        <Footer />
      </>
    );
  }
}

export default Board;
