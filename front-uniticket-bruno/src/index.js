import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';
import './styles/global/_global-dir.scss';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/umd/popper.js';
import 'bootstrap/dist/js/bootstrap.js'; 

import Template from './components/Template.jsx';
import Login from './app/Routes/Login'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/*' component={Template} />
        </Switch>  
    </BrowserRouter> 
    , document.getElementById('root')
); //rotas que nao terao o template padrao



serviceWorker.unregister();
