import React from 'react';
import '../App.css';
import { Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Board from './pages/Board';
import CharacterDetail from './pages/CharacterDetail';
import {
  ROUTE_CHARACTER,
  ROUTE_HOME,
  ROUTE_CHARACTERS,
} from '../utils/constants';
class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path={ROUTE_HOME} component={Landing} />
          <Route path={ROUTE_CHARACTERS} component={Board} />
          <Route path={ROUTE_CHARACTER} component={CharacterDetail} />
        </Switch>
      </>
    );
  }
}

export default App;
