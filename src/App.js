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
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
          <Route path={process.env.PUBLIC_URL + "/product"} component={Product} />
          <Route path={process.env.PUBLIC_URL + "/about"} component={About} />
          <Route path={process.env.PUBLIC_URL + "/career"} component={Career} />

          <Route path={process.env.PUBLIC_URL + "/login"} component={Login} />
          <Route path={process.env.PUBLIC_URL + "/register"} component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;
