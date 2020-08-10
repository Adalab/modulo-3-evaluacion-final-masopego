import React from "react";
import PropTypes from "prop-types";
import "./_button.scss";

const Button = (props) => {
  return (
    <button
      className={`btn btn__size--${props.size} btn__color--${props.color}`}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

Button.defaultProps = {
  size: "medium",
  color: "primary",
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["large", "medium", "small"]),
  color: PropTypes.oneOf(["primary", "secondary"]),
};

export default Button;
