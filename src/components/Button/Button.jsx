import React from 'react';

// import { Container } from './styles';

export default function Button(props) {
  
  const { disabled, title, content, id, onClick, className } = props

  return (
    <button 
      id={id} 
      className={`btn text-uppercase ${className}`} 
      onClick={() => onClick()}
      title={title}
      disabled={disabled ? true : false}
    >
      <span> {content} </span>
    </button>
  );
}
