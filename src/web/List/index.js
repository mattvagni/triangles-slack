import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function List(props) {
  return (
    <ol className="list">
      {props.items.map((item, index) => (
        <li key={index} className="list__item">
          <span className="list__counter" aria-hidden>{index + 1}.</span>
          {item}
        </li>
      ))}
    </ol>
  )
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default List;
