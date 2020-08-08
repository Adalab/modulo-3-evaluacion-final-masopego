import React from 'react';
import { Link } from 'react-router-dom';

class NotFound extends React.Component {
  render() {
    return (
      <>
        <div>404: Esto no es una página</div>
        <Link to="/"> Volver a la home </Link>
      </>
    );
  }
}

export default NotFound;
