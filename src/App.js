import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header"
import './App.css';

function App() {
  return (
    <div className="app">

      <Router>

        <Switch>

          <Route path="/">

            <Header />
            <Home />

          </Route>

        </Switch>

      </Router>

    </div>
  );
}

export default App;
