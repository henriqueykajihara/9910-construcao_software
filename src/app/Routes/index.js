import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Exemplo from '../Routes/Example';
import Home from '../Routes/Home';
import Transferencia from './Transferencia';

export default class Routes extends Component {
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/exemplo' component={Exemplo} />
                    <Route exact path='/transferencia' component={Transferencia} />
                    <Route path='/' component={Home} />
                </Switch>  
            </BrowserRouter>
        ) 
    }
}
