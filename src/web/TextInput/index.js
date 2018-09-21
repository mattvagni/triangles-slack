import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const TextInput = ({ id, name, label, helpText, placeholder, type, ...otherProps }) => (
  <fieldset className="text-input">
    <label className="text-input__label" htmlFor={id}>
      {label}
    </label>
    {helpText && <span className="text-input__help-text">{helpText}</span>}
    <input
      className="text-input__input"
      type={type}
      placeholder={placeholder}
      id={id}
      name={name}
      {...otherProps}
    />
  </fieldset>
)

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  helpText: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['email', 'text']),
};

TextInput.defaultProps = {
  type: 'text',
  helpText: '',
}

export default TextInput;
