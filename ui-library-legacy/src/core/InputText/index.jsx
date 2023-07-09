import React, { useState } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import units from '../../definitions/units';
import fontSizes from '../../definitions/fontSizes';
import lineHeights from '../../definitions/lineHeights';
import Container from '../../layout/Container';
import { ReactComponent as ErrorIcon } from '../../icons/error-black-18dp.svg'

const InputWrapper = styled.div`
  align-items: center;
  display: flex;
  padding-top: ${units.xs}px;
  position: relative;
    
  > svg {
    fill: ${({ theme }) => theme?.inputText?.errorColor};
  }
`;

const StyledInput = styled.input`
  ${({
    error,
    padding,
    theme: {
      inputText: {
        background,
        color,
        borderWidth,
        borderColor,
        borderRadius,
        focusColor,
        disabledColor,
        errorColor,
      } = {}
    } = {}
  }) => `
    background: ${background};
    border: ${borderWidth} solid ${error ? errorColor : borderColor};
    border-radius: ${borderRadius};
    color: ${error ? errorColor : color};

    &:focus {
      outline: none;
      border: ${borderWidth} solid ${focusColor};
    }
  
    &:disabled {
      border-color: ${disabledColor};
    }
  
    &:disabled ~ * {
      color: ${disabledColor};
    }
  `}

  ${({ hideNumberWheel }) => hideNumberWheel ? `
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type=number] {
      -moz-appearance: textfield;
    }
  ` : `
  `}

  box-sizing: border-box;  
  font-size: ${fontSizes.md}px;
  line-height: ${lineHeights.md};
  padding: ${({ padding }) => padding ? padding : `${units.xs}px`};
  ${({ width }) => width ? `width: ${width};` : ''}
  ${({ height }) => height ? `height: ${height};` : ''}
  ${({ addPaddingForIcon }) => addPaddingForIcon ? `padding-right: ${units.xxl}px` : ''}
`

const Placeholder = styled.label`
  border: 2px solid transparent;
  color: ${({ theme, error }) => error ? theme?.inputText?.errorColor : theme?.inputText?.color};
  pointer-events: none;
  left: 0;
  line-height: ${lineHeights.md};
  padding: ${({ shouldAscend }) => shouldAscend ? units.micro : units.xs}px;
  position: absolute;
  transform: ${({ shouldAscend }) => shouldAscend ? `translateX(-${units.micro}px) translateY(-100%) scale(.75)` : 'translateX(0) translateY(-2px) scale(1)'};
  transform-origin: left;
  transition: .2s ease-in-out;
`

const FillerTags = styled.label`
  color: ${({ theme }) => theme?.inputText?.color};
  ${({ left, right }) => left ? `margin-right: ${units.xxs}px` : right ? `margin-left: ${units.xxs}px` : ''}
`

/**
 * Primary UI component for user interaction
 */
const InputText = ({ iconContent, id, placeholder, prefix, suffix, type = 'text', innerRef, onChange, onFocus, onBlur, error, errorMessage, height, width, wrapperWidth, ...rest }) => {
  const [ isFocused, setFocused ] = useState(false);
  const [ inputIsFilled, setInputFilled ] = useState(false);
  const elId = id || placeholder || prefix || suffix

  return (
    <InputWrapper>
      {prefix && <FillerTags htmlFor={elId} left {...rest}>{prefix}</FillerTags>}
      <Container width={wrapperWidth || width} height={height} position="relative">
        <StyledInput
          id={elId}
          error={!isFocused && error}
          onChange={(e) => {
            onChange && onChange(e)
            setInputFilled(e.target.value !== '')
          }}
          onFocus={(e) => {
            onFocus && onFocus(e)
            setFocused(true)
          }}
          onBlur={(e) => {
            onBlur && onBlur(e)
            setFocused(false)
          }}
          type={type}
          ref={innerRef}
          width={width} 
          height={height}
          addPaddingForIcon={!!iconContent}
          {...rest}
        />
        
        {(!!placeholder || (prefix && error)) &&
          <Placeholder {...rest} htmlFor={elId} error={!isFocused && error} shouldAscend={(isFocused || inputIsFilled) || (prefix && error)}>
            {!isFocused && error ? (errorMessage || `Enter Valid: ${placeholder}`) : placeholder}
          </Placeholder>
        }

        {iconContent &&
          <Container height="100%" position="absolute" right={`${units.xs}px`} top="0">
            {iconContent}
          </Container>
        }
      </Container>
      {suffix && <FillerTags htmlFor={elId} right {...rest}>{suffix}</FillerTags>}
      {!isFocused && error && <ErrorIcon height="24" width="24"/>}
    </InputWrapper>
  );
};

InputText.propTypes = {
  placeholder: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),
  prefix: PropTypes.string, 
  suffix: PropTypes.string, 
  type: PropTypes.string, 
  onChange: PropTypes.func, 
  onFocus: PropTypes.func, 
  onBlur: PropTypes.func, 
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

InputText.defaultProps = {
  type: 'text',
};

export default InputText;