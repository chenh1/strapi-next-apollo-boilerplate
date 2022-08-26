import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import fontSizes from '../../definitions/fontSizes'

const StyledParagraph = styled.p`
  font-size: ${({ fontSize }) => fontSize ? fontSizes[fontSize] : fontSizes.md}px;
  line-height: 1.5;
  color: ${({ color, theme }) => color || theme?.paragraph?.color};
  
  ${({ resetMargin = true }) => resetMargin ? 'margin: 0;' : ''}
  ${({ fontStyle }) => fontStyle ? `font-style: ${fontStyle};` : ''}
  ${({ fontWeight }) => fontWeight ? `font-weight: ${fontWeight};` : ''}
  ${({ textAlign }) => textAlign ? `text-align: ${textAlign};` : ''}
`

/**
 * Primary UI component for user interaction
 */
const Paragraph = ({ children, ...props }) => {
  return (
    <StyledParagraph {...props}>
      {children}
    </StyledParagraph>
  );
};

Paragraph.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * How large should the Paragraph be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Paragraph.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};

export default Paragraph
