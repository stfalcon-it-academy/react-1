import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

const Route1 = () => <h2>Route 1 Component</h2>;
const Route2 = () => <h2>Route 2 Component</h2>;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <nav className="nav">
            <a className="nav-link" href="/route-1">
              Route 1
            </a>
            <a className="nav-link" href="/route-2">
              Route 2
            </a>
          </nav>
          <div className="row">
            <div className="col-6">
              <div className="card">
                <div className="card-body">
                  <Route path="/route-1" component={Route1} />
                  <Route path="/route-2" component={Route2} />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card">
                <div className="card-body" />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
