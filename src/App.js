import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './components/pages/home/Home';
import Product from './components/pages/product/Product';
import About from './components/pages/about/About';
import Career from './components/pages/career/Career';
import Login from './components/pages/login/Login';
import Register from './components/pages/register/Register';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/about" component={About} />
          <Route path="/career" component={Career} />

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;
