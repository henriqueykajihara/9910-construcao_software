import React from 'react';
import PropTypes from 'prop-types';
import ContentList from './ContentList';

const List = (props) => (
  <ul className={`list-group ${props.className}`} id={props.id}>
    { props.data.map( item => (
      <ContentList 
        idList={props.id}
        classNameDefault={props.classNameData}
        item={item}
      />
    ))}
  </ul>
);

List.propTypes = {
  data: PropTypes.array
};

List.defaultProps = {
  data: []
}

export default List;

