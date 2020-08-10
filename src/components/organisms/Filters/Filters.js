import React from "react";
import SearchFilter from "../../molecules/SearchFilter";
import Button from "../../atoms/button/button.js";
import "./_filters.scss";
import PropTypes from "prop-types";

class Filters extends React.Component {
  render() {
    return (
      <div className="search">
        <SearchFilter
          onInputSearch={this.props.onInputSearch}
          value={this.props.value}
        />
        <Button
          title="Reset"
          size="small"
          color="secondary"
          onClick={this.props.resetSearch}
        />
      </div>
    );
  }
}

Filters.propTypes = {
  onInputSearch: PropTypes.func,
  value: PropTypes.string,
};

export default Filters;
