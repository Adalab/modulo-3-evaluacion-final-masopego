import React from 'react';
import SearchFilter from '../molecules/SearchFilter';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  render() {
    return (
      <>
        <SearchFilter
          onInputSearch={this.props.onInputSearch}
          value={this.props.value}
        />
      </>
    );
  }
}

Filters.propTypes = {
  onInputSearch: PropTypes.func,
  value: PropTypes.string,
};

export default Filters;
