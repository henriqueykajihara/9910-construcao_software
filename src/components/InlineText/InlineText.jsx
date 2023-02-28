import React from 'react';

// import { Container } from './styles';

export default function InlineText({ className, type, text }) {
  switch (type) {
    case 'normal':
      return <span className={className}> {text} </span>;
    case 'bold':
      return <strong className={className}> {text} </strong>;
    case 'strike':
      return <del className={className}> {text} </del>;
    case 'small':
      return <small className={className}> {text} </small>
    default: 
      return <span />
  }
}
