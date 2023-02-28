import React, { Component } from 'react';
import Button from '../../../components/Button/Button';
import Title from '../../../components/Title/Title';
import { formatDateHour } from '../../../utils/Date';

export default class AplicarCredito extends Component {

  constructor(props) {
    super(props)
    this.state = {
      quantidadeTicket: this.props.quantidadeTicket,
      aplicouCreditoStyles: {
        opacity: '0',
        backgroundColor: 'lightyellow',
        borderRadius: '8px',
        padding: '40px',
        transition: 'opacity 0.5s ease-out'
      },
      usuario: {
        nome: 'Henrique Negri Rodrigues'
      }
    }
    this.removeTicket = this.removeTicket.bind(this);
  }

  removeTicket () {
    if (this.state.quantidadeTicket > 0) {
      const aplicouCreditoStyles = {
        ...this.state.aplicouCreditoStyles,
        opacity: '100'
      }
      this.setState({
        quantidadeTicket: this.state.quantidadeTicket - 1,
        aplicouCreditoStyles
      })
    } else 
      alert("você não possui créditos para usar")
  }

  componentDidMount () {
    if (this.props.quantidadeTicket === undefined) {
      this.setState({ quantidadeTicket : 3 })
    }
  }

  render() {
    const { quantidadeTicket, aplicouCreditoStyles, usuario } = this.state
    const dataAtual = formatDateHour()

    return (
      <div 
        className="wrapper container pt-3 d-flex flex-column justify-content-center align-items-center"
        data-test="wrapper"
      > 
        <Title text="Consumir Ticket"/>
        <div className="numero">
          <h2 data-test="quantidadeAtualTickets">
            <span className="mr-3">Você possui: </span>
            {quantidadeTicket}
            <span className="ml-3">tickets</span>
          </h2>
        </div>
        <div className="col-12 d-flex justify-content-end">
          <Button 
            data-test="removeTicketButton" 
            content="USAR TICKET" onClick={this.removeTicket}
            classNameButton="btn-outline-primary mt-3 "  
          />
        </div>
        <div id="aplicou-credito" style={aplicouCreditoStyles}>
          <div className="col-12 text-left">
            <h6 className="col-12"> Nome: {usuario.nome} </h6>
            <h6 className="col-12"> Aplicação do Ticket: {dataAtual} </h6>
          </div>
        </div>
      </div>
    );
  }
}
