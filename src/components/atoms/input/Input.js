import React from "react";
import PropTypes from "prop-types";
import "./_input.scss";

const Input = (props) => {
  return (
    <>
      <label className="input__label" htmlFor={props.id}>
        {" "}
        <input
          className="input"
          type={props.kind}
          name={props.name}
          value={props.value}
          id={props.id}
          placeholder={props.placeholder}
          onChange={props.handleInputChange}
        />
      </label>
    </>
  );
};

Input.defaultProps = {
  kind: "text",
  name: "name",
  value: "",
  id: "",
  placeholder: "",
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
