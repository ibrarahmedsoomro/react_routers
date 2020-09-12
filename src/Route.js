import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Proudcts';
import ProductItems from './Components/ProductItems';
import NavBar from './Components/Navbar';



function RouterConfig() {
  return (
    <div >
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/products" component={Products} />
          <Route path="/product/:id" component={ProductItems} />
          <Route path="*" component={() => <h1>404 Not Fount</h1>} >

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default RouterConfig;
