import React from "react";
import "../stylesheets/layout/_app.scss";
import { Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Board from "./pages/Board";
import CharacterDetail from "./pages/CharacterDetail";
import NotFound from "./pages/NotFound/NotFound";
import {
  ROUTE_CHARACTER,
  ROUTE_HOME,
  ROUTE_CHARACTERS,
} from "../utils/constants";
class App extends React.Component {
  render() {
    return (
      <main className="main">
        <Switch>
          <Route exact path={ROUTE_HOME} component={Landing} />
          <Route path={ROUTE_CHARACTERS} component={Board} />
          <Route path={ROUTE_CHARACTER} component={CharacterDetail} />
          <Route component={NotFound} />
        </Switch>
      </main>
    );
  }
}

export default App;
