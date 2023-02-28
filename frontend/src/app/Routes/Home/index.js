import React, { Component } from 'react';
import Button from '../../../components/Button/Button';
import List from '../../../components/List/ContainerList';
import Title from '../../../components/Title/Title';
import Subtitle from '../../../components/Subtitle/Subtitle';
import Paragraph from '../../../components/Paragraph/Paragraph';
import InlineText from '../../../components/InlineText/InlineText';

// import { Container } from './styles';

export default class Home extends Component {

  onClickButton () {
    alert("oi")
  }

  render() {
    const buttonprops = {
      title: 'desativado',
      classNameButton: 'btn-primary col-2 mt-3',
      content: 'desativado',
      onClick: this.onClickButton,
      disabled: true,
    }
    const buttonprops2 = {
      title: 'secondary',
      classNameButton: 'btn-secondary col-2 mt-3',
      content: 'secondary',
      onClick: this.onClickButton,
    }
    const buttonprops3 = {
      title: 'success',
      classNameButton: 'btn-success col-2 mt-3',
      content: 'success',
      onClick: this.onClickButton,
    }
    const buttonprops4 = {
      title: 'danger',
      classNameButton: 'btn-danger col-2 mt-3',
      content: 'danger',
      onClick: this.onClickButton,
    }
    const buttonprops5 = {
      title: 'outline primary',
      classNameButton: 'btn-outline-primary col-2 mt-3',
      content: 'outline primary',
      onClick: this.onClickButton,
    }

    const lista = {
      id: 'lista-exemplo',
      className: 'mt-4 flex-row', 
      classNameData: 'list-group-item-action col',
      data: [ 
        {
          id: 0,
          className: 'list-group-item-primary',
          onClick: this.onClickButton,
          value: 'primary'
        },
        {
          id: 0,
          className: 'list-group-item-secondary',
          onClick: this.onClickButton,
          value: 'secondary'
        },
        {
          id: 0,
          className: 'list-group-item-success',
          onClick: this.onClickButton,
          value: 'success'
        },
        {
          id: 0,
          className: 'list-group-item-danger',
          onClick: this.onClickButton,
          value: 'danger'
        },
      ]
    }

    return (
      <div>
        <Title text='Isso é um titulo'/>
        <Subtitle text='Isso é um subtitulo'/>
        <div className='row d-flex justify-content-around'>
          <div className='col-12'>
            <Paragraph 
              text='Aqui eu pus um paragrafo para identificar que é um paragrafo e embaixo terá tres inline text'
            />
            <InlineText 
              text='span'
              type='normal'
              className='mr-3'
            />
            <InlineText 
              text='strong'
              type='bold'
              className='mr-3'
            />
            <InlineText 
              text='strike'
              type='strike'
              className='mr-3'
            />
          </div>
          <div className='col-12 mt-5'>
            <Title text='Botões'/>
          </div>
          <Button {...buttonprops}/>
          <Button {...buttonprops2}/>
          <Button {...buttonprops3}/>
          <Button {...buttonprops4}/>
          <Button {...buttonprops5}/>
        </div>  
        <div className='col-12 mt-5'>
          <Title text='Lista'/>  
        </div>  
        <List {...lista}/>
      </div>
    );
  }
}
