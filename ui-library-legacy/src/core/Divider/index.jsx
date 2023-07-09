import PropTypes from 'prop-types';
import styled from 'styled-components';

const Divider = styled.hr`
  ${({ 
    pixelsThick,
    color,
    theme: {
      divider: {
        borderColor = ''
      } = {}
    } = {}
  }) => !pixelsThick ? `
    border-right: 0;
    border-top: 0;
  ` : `
    border-top: 0;
    border-bottom: ${pixelsThick}px solid ${color || borderColor};
  `}

  ${({ vertical, height }) => vertical ? `
    height: ${height ? `${height}px` : '100%'};
    width: 0;
  `: 'width: 100%;'}
`

/**
 * Primary UI component for user interaction
 */

Divider.propTypes = {
  pixelsThick: PropTypes.number,
  vertical: PropTypes.bool,
  height: PropTypes.number,
};

Divider.defaultProps = {
  pixelsThick: 1,
}

export default Divider
