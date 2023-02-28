import React from 'react';

// import { Container } from './styles';

export default function Button(props) {
  
  const { disabled, content, onClick, classNameButton } = props

  return (
    <button 
      className={`btn text-uppercase ${classNameButton}`} 
      onClick={() => onClick()}
      disabled={disabled ? true : false}
      {...props}
    >
      <span> {content} </span>
    </button>
  );
}
