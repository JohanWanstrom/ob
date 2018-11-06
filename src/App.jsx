import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import LoggedOnPage from "./components/LoggedOnPage";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginPage} />
          <Route path="/loggedon" component={LoggedOnPage} />
        </Switch>
      </main>
    );
  }
}

export default App;
