import React from 'react';
import { Link } from 'react-router-dom';

class Landing extends React.Component {
  render() {
    return (
      <>
        <div>Holi Caracolii</div>
        <Link to="/rick-and-morty-characters">Comenzar</Link>
      </>
    );
  }
}

export default Landing;
