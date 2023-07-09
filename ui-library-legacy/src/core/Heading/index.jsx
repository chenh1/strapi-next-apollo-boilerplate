import React from 'react';
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types';
import fontSizes from '../../definitions/fontSizes';
import { mq } from '../../layout/breakpoints'

export const getBaseHeaderCss = ({ 
  resetMargin = true,
  textAlign,
  color,
  lineHeight,
  theme: {
    header: {
      color: themeColor,
      fontFamily
    } = {}
  } = {}
}) => css`
  ${(color || themeColor) ? `color: ${color || themeColor};` : ''}
  font-family: ${fontFamily ? fontFamily : "'Nunito', sans-serif"};
  line-height: ${lineHeight || '1.5'};
  ${resetMargin ? 'margin: 0;' : ''}
  ${textAlign ? `text-align: ${textAlign};` : ''}
`

// Used to contain height since Nunito's fallback creates a layout shift
const heightMultipler = 1.145833

const BaseHeader = {
  h1: styled.h1`
    font-size: ${({ fontSizeMobile }) => fontSizes[fontSizeMobile] || fontSizes.h1}px;
    ${({ resetMargin, theme, color, textAlign, lineHeight }) => getBaseHeaderCss({ resetMargin, theme, color, textAlign, lineHeight })};
    font-weight: ${({ weight }) => weight || 700};
    max-height: ${({ fontSizeMobile, allowMaxHeight }) => allowMaxHeight ? `${(fontSizes[fontSizeMobile] || fontSizes.h1)}px` * heightMultipler : 'auto'};

    ${mq.md`
      font-size: ${({ fontSize }) => fontSizes[fontSize] || fontSizes.h1}px;
      max-height: ${({ fontSize, allowMaxHeight }) => allowMaxHeight ? `${(fontSizes[fontSize] || fontSizes.h1)}px` * heightMultipler : 'auto'};
    `}
  `,
  h2: styled.h2`
    font-size: ${({ fontSizeMobile }) => fontSizes[fontSizeMobile] || fontSizes.h2}px;
    ${({ resetMargin, theme, color, textAlign, lineHeight }) => getBaseHeaderCss({ resetMargin, theme, color, textAlign, lineHeight })};
    font-weight: ${({ weight }) => weight || 700};
    max-height: ${({ fontSizeMobile, allowMaxHeight }) => allowMaxHeight ? `${(fontSizes[fontSizeMobile] || fontSizes.h2)}px` * heightMultipler : 'auto'};

    ${mq.md`
      font-size: ${({ fontSize }) => fontSizes[fontSize] || fontSizes.h2}px;
      max-height: ${({ fontSize, allowMaxHeight }) => allowMaxHeight ? `${(fontSizes[fontSize] || fontSizes.h2)}px` * heightMultipler : 'auto'};
    `}
  `,
  h3: styled.h3`
    font-size: ${({ fontSizeMobile }) => fontSizes[fontSizeMobile] || fontSizes.h3}px;
    ${({ resetMargin, theme, color, textAlign, lineHeight }) => getBaseHeaderCss({ resetMargin, theme, color, textAlign, lineHeight })};
    font-weight: ${({ weight }) => weight || 700};
    max-height: ${({ fontSizeMobile, allowMaxHeight }) => allowMaxHeight ? `${(fontSizes[fontSizeMobile] || fontSizes.h3)}px` * heightMultipler : 'auto'};

    ${mq.md`
      font-size: ${({ fontSize }) => fontSizes[fontSize] || fontSizes.h3}px;
      max-height: ${({ fontSize, allowMaxHeight }) => allowMaxHeight ? `${(fontSizes[fontSize] || fontSizes.h3)}px` * heightMultipler : 'auto'};
    `}
  `,
  h4: styled.h4`
    font-size: ${({ fontSizeMobile }) => fontSizes[fontSizeMobile] || fontSizes.h4}px;
    ${({ resetMargin, theme, color, textAlign, lineHeight }) => getBaseHeaderCss({ resetMargin, theme, color, textAlign, lineHeight })};
    font-weight: ${({ weight }) => weight || 700};
    max-height: ${({ fontSizeMobile, allowMaxHeight }) => allowMaxHeight ? `${(fontSizes[fontSizeMobile] || fontSizes.h4)}px` * heightMultipler : 'auto'};

    ${mq.md`
      font-size: ${({ fontSize }) => fontSizes[fontSize] || fontSizes.h4}px;
      max-height: ${({ fontSize, allowMaxHeight }) => allowMaxHeight ? `${(fontSizes[fontSize] || fontSizes.h4)}px` * heightMultipler : 'auto'};
    `}
  `,
  noHTag: styled.span`
    font-size: ${({ fontSizeMobile }) => fontSizes[fontSizeMobile] || fontSizes.h4}px;
    ${({ resetMargin, theme, color, textAlign, lineHeight }) => getBaseHeaderCss({ resetMargin, theme, color, textAlign, lineHeight })};
    font-weight: ${({ weight }) => weight || 700};
    max-height: ${({ fontSizeMobile, allowMaxHeight }) => allowMaxHeight ? `${(fontSizes[fontSizeMobile] || fontSizes.h4)}px` * heightMultipler : 'auto'};

    ${mq.md`
      font-size: ${({ fontSize }) => fontSizes[fontSize] || fontSizes.h4}px;
      max-height: ${({ fontSize, allowMaxHeight }) => allowMaxHeight ? `${(fontSizes[fontSize] || fontSizes.h4)}px` * heightMultipler : 'auto'};
    `}
  `
}

/**
 * Primary UI component for user interaction
 */
const Header = ({ type, noHTag, children, ...rest }) => {
  if (type === 'h1') {
    return <BaseHeader.h1 {...rest}>{children}</BaseHeader.h1>
  }

  if (type === 'h3') {
    return <BaseHeader.h3 {...rest}>{children}</BaseHeader.h3>
  }

  if (type === 'h4') {
    return <BaseHeader.h4 {...rest}>{children}</BaseHeader.h4>
  }

  if (noHTag) {
    return <BaseHeader.noHTag {...rest}>{children}</BaseHeader.noHTag>
  }

  return <BaseHeader.h2 {...rest}>{children}</BaseHeader.h2>
};

Header.propTypes = {
  /**
   * Type of header (h1, h2, h3, or h4)
   */
  type: PropTypes.string,
  /**
   * Text color of header
   */
  color: PropTypes.string,
  /**
   * Font size variable
   */
  fontSize: PropTypes.string,
};

Header.defaultProps = {
  type: 'h2',
  fontSize: ''
};

export default Header;