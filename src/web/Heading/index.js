import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.css';

function Heading(props) {
  const Element = `h${props.level}`;
  return (
    <Element className={classnames('heading', `heading--h${props.level}`)}>
      {props.children}
    </Element>
  )
}

Heading.propTypes = {
  level: PropTypes.oneOf([1,2,3]).isRequired,
  children: PropTypes.node.isRequired,
};

export default Heading;
