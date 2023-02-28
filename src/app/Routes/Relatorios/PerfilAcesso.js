import React, { Component } from 'react';
import BarChart from '../../../components/BarChart/BarChart';
import { getWeek } from '../../../utils/Date';
import { defaultExt } from 'upath';
import Title from '../../../components/Title/Title';

// import { Container } from './styles';

export default class PerfilAcesso extends Component {
  render() {
    const columns = getWeek()
    const data = [4500, 500, 6000, 700, 1000, 1200, 5000]
    const label = "Quantidade de Acesso"
    return (
      <div className="d-flex justify-content-center align-items-center px-3 flex-column">
        <Title className="my-2" text="Relatório de Perfil de Acesso"/>
        <BarChart columns={columns} data={data} labelColumn={label}/>
      </div>
    );
  }
}
