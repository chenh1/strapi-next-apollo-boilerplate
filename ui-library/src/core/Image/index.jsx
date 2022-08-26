import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const StyledImage = styled.img`
  ${({ width }) => width ? `width: ${width};` : ''}
  ${({ height }) => height ? `width: ${height};` : ''}
`

/**
 * Primary UI component for user interaction
 */
const Image = ({ children, ...rest }) => {
  return (
    <StyledImage {...rest}>
      {children}
    </StyledImage>
  );
};

Image.propTypes = {
   width: PropTypes.string,
   height: PropTypes.string,
};

Image.defaultProps = {};

export default Image;