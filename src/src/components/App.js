import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from './Header';
import { LeftNav } from './LeftNav';
import {Dashboard} from "./Dashboard";
import {Pets} from "./Pets";

import '../css/app.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="App__body" >
            <LeftNav />
            <div className="App__contentarea" >
              <Route path="/" exact component={Dashboard} />
              <Route path="/dashboard/" component={Dashboard} />
              <Route path="/rater/" component={Pets} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

