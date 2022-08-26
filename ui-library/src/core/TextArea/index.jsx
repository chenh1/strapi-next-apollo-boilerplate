import React, { Fragment, useState } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import units from '../../definitions/units';
import fontSizes from '../../definitions/fontSizes';
import { ReactComponent as ErrorIcon } from '../../icons/error-black-18dp.svg'

const TextAreaWrapper = styled.div`
  display: flex;
  padding-top: ${units.xs}px;
  position: relative;

  > svg {
    fill: ${({ theme }) => theme?.textArea?.errorColor};
  }
`;

const StyledTextArea = styled.textarea`
  ${({
    error,
    theme: {
      textArea: {
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



  box-sizing: border-box;
  font-size: ${fontSizes.sm}px;
  padding: ${units.xxs}px;
  ${({ width }) => width ? `width: ${width};` : ''}
  ${({ height }) => height ? `height: ${height};` : ''}
`

const Placeholder = styled.span`
  align-items: center;
  color: ${({ theme, error }) => error ? theme?.textArea?.errorColor : theme?.textArea?.color};
  display: flex;
  font-size: ${({ shouldAscend }) => shouldAscend ? fontSizes.sm : fontSizes.sm}px;
  pointer-events: none;
  padding: ${({ shouldAscend }) => shouldAscend ? units.micro : units.xxs}px;
  position: absolute;
  transform: ${({ shouldAscend }) => shouldAscend ? 'translateY(-100%)' : 'translateY(0)'};
  transition: .2s ease-in-out;
`

/**
 * Primary UI component for user interaction
 */
const TextArea = ({ placeholder, error, innerRef, onChange, ...rest }) => {
  const [ isFocused, setFocused ] = useState(false);
  const [ textAreaIsFilled, setTextAreaFilled ] = useState(false)

  return (
    <TextAreaWrapper>
      {!!placeholder && 
        <Placeholder error={!isFocused && error} shouldAscend={isFocused || textAreaIsFilled}>
          {placeholder}
        </Placeholder>
      }
      <StyledTextArea
        ref={innerRef}
        onChange={(e) => {
          onChange && onChange(e)
          setTextAreaFilled(e.target.value !== '')}
        }
        onFocus={() => setFocused(true)} 
        onBlur={() => setFocused(false)}
        error={!isFocused && error}
        type="text" 
        {...rest}
      />
      {!isFocused && error && <ErrorIcon />}
    </TextAreaWrapper>
  );
};

TextArea.propTypes = {
  error: PropTypes.bool,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

TextArea.defaultProps = {
  error: false
};

export default TextArea;