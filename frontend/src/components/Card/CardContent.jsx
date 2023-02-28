import React, { useState } from 'react';

CardHeader = (props) => {
  
  const [ativo, setAtivo] = useState(0)

  return (
    <div className={`card-header ${props.className}`}>
      {
        (props.navItems !== undefined) ?
        <ul className="nav nav-tabs card-header-tabs">
          {props.navItems.map( (item, index) => (
            <li className="nav-item">  
              <a 
                href="#" 
                className={`nav-link ${ativo === index ? 'acive' : ''} ${item.disabled}`} 
                onClick={(index) => setAtivo(index)}
              >
                {item.value}
              </a>
            </li>
          ))}
        </ul> 
        : ''
      }
    </div>
  )
};

CardFooter = () => <div />;

export default {
  CardHeader,
  CardFooter
};

