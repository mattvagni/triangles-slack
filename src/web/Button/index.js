import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Button = ({children, ...otherProps}) => (
  <button className="button" type="submit" {...otherProps}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Button;
