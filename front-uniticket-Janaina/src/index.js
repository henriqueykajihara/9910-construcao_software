import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/index.css";
import "./styles/global/_global-dir.scss";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch } from "react-router-dom";
import "jquery/dist/jquery.js";
import "popper.js/dist/umd/popper.js";
import "bootstrap/dist/js/bootstrap.js";

import PublicRoute from "./app/Wrappers/publicRoute";
import PrivateRoute from "./app/Wrappers/privateRoute";
import Template from "./components/Template.jsx";
import Login from "../src/app/Routes/Login";
import CriarConta from "../src/app/Routes/CriarConta";
import EsqueceuSenha from "../src/app/Routes/EsqueceuSenha";
import RedefinirSenha from "../src/app/Routes/RedefinirSenha";
import ConfirmacaoCriacao from "../src/app/Routes/ConfirmacaoCriacao";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <PublicRoute restricted={true} exact path="/login" component={Login} />
      <PublicRoute
        restricted={true}
        exact
        path="/criar-conta"
        component={CriarConta}
      />
      <PublicRoute
        restricted={true}
        exact
        path="/esqueceu-senha"
        component={EsqueceuSenha}
      />
      <PublicRoute
        restricted={true}
        exact
        path="/redefinir-senha"
        component={RedefinirSenha}
      />
      <PublicRoute
        restricted={true}
        exact
        path="/confirmacao-criacao"
        component={ConfirmacaoCriacao}
      />
      <PrivateRoute path="/" component={Template} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
