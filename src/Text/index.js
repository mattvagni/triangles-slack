import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './styles.css';

function Text(props) {
  const Element = props.isInline ? 'span' : 'p';
  const classes = classnames('text', {
    'text--isInline': props.isInline,
  });

  return (
    <Element className={classes}>
      {props.isBold ? <strong>{props.children}</strong> : props.children}
    </Element>
  )
}

Text.propTypes = {
  isInline: PropTypes.bool,
  isBold: PropTypes.bool,
}

Text.defaultProps = {
  isInline: false,
  isBold: false,
};

export default Text;
