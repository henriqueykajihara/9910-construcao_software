import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Exemplo from '../Routes/Example';
import Home from '../Routes/Home';
import AplicarCredito from '../Routes/AplicarCredito';
import PerfilAcesso from '../Routes/Relatorios/PerfilAcesso'

export default class Routes extends Component {
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/exemplo' component={Exemplo} />
                    <Route exact path='/aplicar-credito' component={AplicarCredito} />
                    <Route exact path='/relatorios/perfil-acesso' component={PerfilAcesso} />
                    <Route path='/' component={Home} />
                </Switch>  
            </BrowserRouter>
        ) 
    }
}
