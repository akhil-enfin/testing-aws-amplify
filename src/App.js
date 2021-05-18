import { HashRouter, Route, Redirect } from "react-router-dom";
import List from './components/list'
import District from './components/district'
import Avilability from "./components/avilability";
import './App.css';
import React from "react";


function App() {
  return (
    <HashRouter>
      {/* <Switch> */}

      {/* </Switch> */}

      <Route exact path="/" component={District} />
      <Route exact path="/:id/:place" component={List} />
      <Route exact path="/avilability" component={List} />



    </HashRouter>
  )
}

export default App;
