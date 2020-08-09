import React from "react";
import Input from "../atoms/input/Input";
import PropTypes from "prop-types";

class SearchFilter extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(ev) {
    ev.preventDefault();
  }
  handleInputChange(ev) {
    this.props.onInputSearch(ev.target.value);
  }
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <Input
            kind="text"
            name="userSearch"
            id="userSearch"
            placeholder="Búsqueda"
            value={this.props.value}
            handleInputChange={this.handleInputChange}
          />
        </form>
      </>
    );
  }
}

SearchFilter.propTypes = {
  onInputSearch: PropTypes.func,
  value: PropTypes.string,
};

export default SearchFilter;
