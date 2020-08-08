import React from "react";
import { Link } from "react-router-dom";
import "./_landing.scss";
import Logo from "../../../images/Rick_and_Morty_-_logo.png";
import Plane from "../../../images/images_nave.png";

class Landing extends React.Component {
  render() {
    return (
      <>
        <div className="layer">
          <img className="title" src={Logo} alt="Rick and Morty" />
          <img className="main__plane" src={Plane} alt="Airplane" />
          <Link className="start" to="/rick-and-morty-characters">
            Comenzar
          </Link>
        </div>
      </>
    );
  }
}

export default Landing;
