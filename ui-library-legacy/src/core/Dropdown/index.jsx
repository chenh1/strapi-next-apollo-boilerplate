import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import units from '../../definitions/units';
import fontSizes from '../../definitions/fontSizes';
import lineHeights from '../../definitions/lineHeights';
import { ReactComponent as ChevronDown } from '../../icons/expand_more-black-18dp.svg'

const DropdownWrapper = styled.div`
  position: relative;

  > svg {
    fill: ${({ theme }) => theme?.dropdown?.color};
    padding: 6px 0;
    pointer-events: none;
    position: absolute;
    transform: translateX(-100%);
  }
`;

const StyledDropdown = styled.select`
  ${({
    theme: {
      dropdown: {
        background,
        color,
        borderWidth,
        borderColor,
        borderRadius,
        focusColor,
        disabledColor,
      } = {}
    } = {}
  }) => `
    background: ${background};
    border: ${borderWidth} solid ${borderColor};
    border-radius: ${borderRadius};
    color: ${color};

    &:focus {
      outline: none;
      border: ${borderWidth} solid ${focusColor};
    }
  
    &:disabled {
      border-color: ${disabledColor}
    }
  
    &:disabled ~ svg {
      fill: ${disabledColor}
    }
  `}
  
  box-sizing: border-box;
  cursor: pointer;
  font-size: ${fontSizes.md}px;
  line-height: ${lineHeights.md};
  padding: ${units.xs}px ${units.lg}px ${units.xs}px ${units.xxs}px;
  ${({ width }) => width ? `width: ${width};` : ''}
  ${({ height }) => height ? `width: ${height};` : ''}
  appearance: none;
`

/**
 * Primary UI component for user interaction
 */
const Dropdown = ({ options, cssProp, chevronIcon, innerRef, ...rest }) => {
  return (
    <DropdownWrapper css={cssProp} {...rest}>
      <StyledDropdown
        ref={innerRef}
        {...rest}
      >
        {options && options.map(({ value, label, isPlaceholder }, i) => (
          <option key={i} disabled={isPlaceholder} value={value}>{label}</option>
        ))}
      </StyledDropdown>
      {/* {chevronIcon || <Icon SVGIcon={ChevronDown} width="28" height="36"/>} */}
      {chevronIcon || <ChevronDown width="28" height="36"/>}
    </DropdownWrapper>
  );
};

Dropdown.propTypes = {
  withShadow: PropTypes.bool,
  extraPadding: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
};

Dropdown.defaultProps = {
  withShadow: false,
  extraPadding: false
};

export default Dropdown;