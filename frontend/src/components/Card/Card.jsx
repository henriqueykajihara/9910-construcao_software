import React from 'react';
import Button from '../Button';
import { CardHeader, CardFooter } from './CardContent';
import PropTypes from 'prop-types';

export default function Card( { image, title, content, classNameContainer, buttons, cardFooter, cardHeader } ) {
  return (
    <div className={`card ${classNameContainer}`}>
      {cardHeader !== undefined ? <CardHeader {...cardHeader} /> : ''}
      {image}
      <div className="card-body">
        <div className="card-title">
          <h5 className="card-title"> { title } </h5>
          <p className="card-text"> { content } </p>
        </div>
        {buttons.map( button => <Button {...button}/> )}
      </div>
      {cardFooter !== undefined ? <CardFooter {...cardFooter} /> : ''}
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.element,
  title: PropTypes.string,
  content: PropTypes.string,
  classNameContainer: PropTypes.string,
  buttons: PropTypes.array,
  cardFooter: PropTypes.object,
  cardHeader: PropTypes.object,
};