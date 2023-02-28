import React from 'react';

// import { Container } from './styles';

export default function List({idList, classNameDefault, item }) {
  return (
    <li
        key={`lista-${idList}-item-${item.id}`} 
        {...item}
        className={`list-group-item click ${classNameDefault} ${item.className}`}
      > 
        <span>
          {item.value} 
        </span>
      </li>
  );
}
