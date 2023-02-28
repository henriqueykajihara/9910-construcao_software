import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Exemplo from '../Routes/Example';
import Home from '../Routes/Home';
import AplicarCredito from '../Routes/AplicarCredito';

export default class Routes extends Component {
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/exemplo' component={Exemplo} />
                    <Route exact path='/aplicar-credito' component={AplicarCredito} />
                    <Route path='/' component={Home} />
                </Switch>  
            </BrowserRouter>
        ) 
    }
}
