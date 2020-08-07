import React from 'react';
import '../App.css';
import { Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Board from './pages/Board';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/rick-and-morty-characters" component={Board} />
        </Switch>
      </div>
    );
  }
}

export default App;
