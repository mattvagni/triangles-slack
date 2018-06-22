import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import LoadingIndicator from '../LoadingIndicator';
import './styles.css';

const Card = (props) => (
  <div className={classnames('card', props.isLoading && 'card--isLoading', props.className)}>
    {props.children}
    <div className={"card__loading-overlay"}>
      <LoadingIndicator />
    </div>
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Card.defaultProps = {
  className: '',
};

export default Card;
