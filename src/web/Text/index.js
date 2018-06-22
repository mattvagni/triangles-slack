import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './styles.css';

function Text(props) {
  const Element = props.isInline ? 'span' : 'p';
  const classes = classnames(
    'text',
    `text--${props.size}`,
    `text--color-${props.color}`,
    {
      'text--isInline': props.isInline,
      'text--inheritColor': props.inheritColor,
    }
  );

  return (
    <Element className={classes}>
      {props.isBold ? <strong>{props.children}</strong> : props.children}
    </Element>
  )
}

Text.propTypes = {
  isInline: PropTypes.bool,
  isBold: PropTypes.bool,
  inheritColor: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['default', 'white']),
}

Text.defaultProps = {
  isInline: false,
  isBold: false,
  inheritColor: false,
  size: 'medium',
  color: 'default',
};

export default Text;
