import "./App.css";

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import PriceList from "./components/PriceList";
import PriceCalculator from "./components/PriceCalculator";
import { getProductList } from "./services/priceListService";

class App extends Component {
  state = {
    products: []
  };

  getAllUsers = () => {
    getProductList().then(products => {
      this.setState({ products: products });
    });
  };

  componentDidMount() {
    this.getAllUsers();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route
              path="/"
              exact
              component={() => <PriceList productList={this.state.products} />}
            />
            <Route path="/about" exact component={() => <PriceCalculator />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
