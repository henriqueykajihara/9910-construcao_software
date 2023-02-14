import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Routes/Home";
import Cardapio from "../Routes/Cardapio";
import Ingredientes from "../Routes/Ingredientes";

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/cardapio" component={Cardapio} />
          <Route exact path="/ingredientes" component={Ingredientes} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}
