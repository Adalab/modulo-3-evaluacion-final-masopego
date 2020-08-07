import React from 'react';
import Input from '../atoms/Input';
import PropTypes from 'prop-types';

class SearchFilter extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(ev) {
    this.props.onInputSearch(ev.target.value);
  }
  render() {
    return (
      <>
        <form>
          <label htmlFor="userSearch">
            {' '}
            Buscar
            <Input
              kind="text"
              name="userSearch"
              id="userSearch"
              placeholder="Búsqueda"
              value={this.props.value}
              handleInputChange={this.handleInputChange}
            />
          </label>
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
