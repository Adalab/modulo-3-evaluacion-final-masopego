import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/Rick_and_Morty_-_logo.png';
import Plane from '../../images/images_nave.png';

class Landing extends React.Component {
  render() {
    return (
      <>
        <div>Holi Caracolii</div>
        <img src={Logo} alt="Rick and Morty" />
        <img src={Plane} alt="Airplane" />
        <Link to="/rick-and-morty-characters">Comenzar</Link>
      </>
    );
  }
}

export default Landing;
