import React, { Component } from 'react';
import Button from '../../../components/Button/Button';

export default class AplicarCredito extends Component {

  constructor(props) {
    super(props)
    this.state = {
      quantidadeTicket: this.props.quantidadeTicket
    }
    this.removeTicket = this.removeTicket.bind(this);
  }

  removeTicket () {
    if (this.state.quantidadeTicket > 0)
      this.setState({quantidadeTicket: this.state.quantidadeTicket - 1})
    else 
      alert("você não possui créditos para usar")
  }

  componentDidMount () {
    if (this.props.quantidadeTicket === undefined) {
      this.setState({ quantidadeTicket : 3 })
    }
  }

  render() {
    const { quantidadeTicket } = this.state

    return (
      <div className="wrapper container d-flex" data-test="wrapper">
        <div className="numero">
          <h1 data-test="quantidadeAtualTickets">
            <span className="mr-3">Você possui: </span>
            {quantidadeTicket}
            <span className="ml-3">tickets</span>
          </h1>
        </div>
        <Button 
          data-test="removeTicketButton" 
          content="REMOVER" onClick={this.removeTicket}
          classNameButton="btn-outline-primary col-2 mt-3"  
        />
      </div>
    );
  }
}
