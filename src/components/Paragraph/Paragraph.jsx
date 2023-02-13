import React from 'react';

// import { Container } from './styles';

export default function Paragraph({className, text}) {
  return (
    <p className={className}> {text} </p>
  );
}
