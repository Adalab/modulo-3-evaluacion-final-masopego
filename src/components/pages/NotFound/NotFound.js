import React from "react";
import { Link } from "react-router-dom";
import "./_notFound.scss";
import Button from "../../atoms/button/button.js";

class NotFound extends React.Component {
  render() {
    return (
      <>
        <section className="notFound">
          <div className="notFound--number">
            4<span></span>4{" "}
          </div>
          <p className="notFound--text">
            Parece que esta página se la ha tragado un agujero negro
          </p>
          <Link to="/">
            {" "}
            <Button title="Volvemos a casa" size="large" />
          </Link>
        </section>
      </>
    );
  }
}

export default NotFound;
