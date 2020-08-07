import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    return (
      <input
        type={this.props.kind}
        name={this.props.name}
        value={this.props.value}
        id={this.props.id}
        placeholder={this.props.placeholder}
        onChange={this.props.handleInputChange}
      />
    );
  }
}

Input.defaultProps = {
  kind: 'text',
  name: 'name',
  value: '',
  id: '',
  placeholder: '',
};

Input.propTypes = {
  kind: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  handleInputChange: PropTypes.func,
};

export default Input;
