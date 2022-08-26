import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components'
import units from '../../definitions/units'

const thumbStyles = css`
  appearance: none;
  -webkit-appearance: none;

  ${({
    theme: {
      slider: {
        thumb: {
          background,
          borderColor,
          borderWidth,
          borderRadius
        } = {}
      } = {}
    } = {}
  }) => `
    background: ${background};
    border-radius: ${borderRadius};
    border: ${borderWidth} solid ${borderColor};
  `}

  ${({ size = 'lg' }) => `
    height: ${units[size]}px;
    width: ${units[size]}px;
  `}
`

const StyledSlider = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  ${({ maxWidth }) => maxWidth ? `max-width: ${maxWidth};` : ''}

  ${({ size = 'lg'}) => `
    height: ${units[size] / 3}px;
  `}
  
  ${({
    theme: {
      slider: {
        background,
        borderColor,
        borderWidth,
        borderRadius
      } = {}
    } = {}
  }) => `
    background: ${background};
    border-radius: ${borderRadius};
    border: ${borderWidth} solid ${borderColor};
  `}

  &::-webkit-slider-thumb {
    ${thumbStyles}
  }

  &::-moz-slider-thumb {
    ${thumbStyles}
  }

  &::-moz-range-thumb {
    ${thumbStyles}
  }
`;

/**
 * Primary UI component for user interaction
 */
const Slider = ({ min = 0, max = 10, ...rest }) => {
  return (
    <StyledSlider min={min} max={max} type="range" {...rest} />
  );
};

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  id: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
  maxWidth: PropTypes.string,
  onChange: PropTypes.func,
};

Slider.defaultProps = {
  onChange: undefined,
};

export default Slider
