import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { useTheme } from 'styled-components';

const StyledInput = styled.input`
  display: none;
`

const Input = ({ innerRef, checked, type, size, OverrideSelectedIcon, OverrideUnselectedIcon, ...rest }) => {
  const theme = useTheme();
  const { input } = theme || {};
  const SelectedIcon = OverrideSelectedIcon || input[type]?.SelectedIcon
  const UnselectedIcon = OverrideUnselectedIcon || input[type]?.UnselectedIcon

  return (
    <Fragment>
      <StyledInput
        ref={innerRef} 
        checked={checked}
        type={type}
        {...rest}
      />
      {checked ? SelectedIcon?.({ size }) : UnselectedIcon?.({ size })}
    </Fragment>
  )
}

Input.propTypes = {
  size: PropTypes.string,
  OverrideSelectedIcon: PropTypes.element,
  OverrideUnselectedIcon: PropTypes.element,
};

Input.defaultProps = {
  size: 'md',
};

export default Input;