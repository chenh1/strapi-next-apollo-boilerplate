import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import containerRules from './containerRules';
import units from '../definitions/units';

const ContainerBase = styled.div`
  ${containerRules}
`;

const Container = ({ children, isInline, innerRef, ...rest }) => (
  <ContainerBase ref={innerRef} display={isInline ? 'inline-grid' : 'grid'} {...rest}>
    {children}
  </ContainerBase>
)


Container.propTypes = {
  isInline: PropTypes.bool,
  gap: PropTypes.oneOf(Object.keys(units)),
};

Container.defaultProps = {
  isInline: false
};

export default Container;