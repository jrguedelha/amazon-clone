import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import './App.css';

function App() {
  return (
    <div className="app">

      <Router>

        <Switch>

          <Route path="/">

            <Home />

          </Route>

        </Switch>

      </Router>

    </div>
  );
}

export default App;
