import React, { Component } from 'react';
import Button from '../../../components/Button/Button';

export default class Transferencia extends Component {
    
    testeBotao() {
        alert("Transferência Realizada com Sucesso");
    }

    render () {
        //refatorar
        return (
            <div className="d-flex justify-content-center h-100 align-items-center">
                <div className="card" style={{height: '75vh', width: '60vw' }}>
                    <div className="card-body d-flex justify-content-center align-items-around flex-wrap">
                        <div className="card-title"> 
                            <h2 className="text-center">Transferência de Crédito </h2>
                        </div>
                        <div className="col-12 px-0">
                            <input disabled="true" className="col-12 my-3" placeholder="Origem"/>
                            <input className="col-12 my-3" placeholder="Destino"/>
                            <input className="col-12 my-3" placeholder="Quantidade"/>
                            <div className="col-12 d-flex justify-content-center">
                                <Button 
                                    title="tranferir"
                                    className="btn-outline-primary col-lg-4 col-md-6 col-12 mt-5"
                                    content="Transferir"
                                    onClick={this.testeBotao}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}