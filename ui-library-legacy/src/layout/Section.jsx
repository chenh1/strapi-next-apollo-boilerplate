import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import units, { fixedValues } from '../definitions/units';
import colors from '../definitions/colors';
import { mq, breakpoints } from './breakpoints';

const { 
  neutral: {
    white
  }
} = colors;

export const StyledSection = styled.div`
  background-color: ${({ bgColor, withDesignBoundary }) => withDesignBoundary ? 'transparent' : bgColor || white};
  display: flex;size
  justify-content: center;
  padding: ${({ withNavSpacer, paddingOverride }) => paddingOverride || (withNavSpacer ? `${units.distinct + fixedValues.navHeight / 2}px 0 ${units.distinct}px 0` : `${units.distinct}px 0`)};
  position: relative;

  ${mq.md`
    padding: ${({ withNavSpacer, paddingOverride }) => paddingOverride || (withNavSpacer ? `${units.distinct + fixedValues.navHeight}px 0 ${units.distinct}px 0` : `${units.distinct}px 0`)};
  `}
`;

export const SectionContent = styled.div`
  max-width: ${({ fullBleed }) => fullBleed ? '100vw' : `${breakpoints.lg}px`};
  padding: 0 ${units.sm}px;
  width: 100%;
`;

/**
 * Primary UI component for user interaction
 */
const Section = ({ children, ...rest }) => {
  return (
    <StyledSection {...rest}>
      <SectionContent {...rest}>
        {children}
      </SectionContent>
    </StyledSection>
  );
};

Section.propTypes = {
  /**
   * Background color
   */
  bgColor: PropTypes.string
};

Section.defaultProps = {
  bgColor: white,
};

export default Section;