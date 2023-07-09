import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import fontSizes from '../../definitions/fontSizes';
import units from '../../definitions/units';

const getStyledList = (type) => styled[type]`
  list-style-type: ${({ renderBulletIcon, noBullets }) => (renderBulletIcon || noBullets ) ? 'none' : type === 'ol' ? 'auto' : 'disc'};
  margin: 0;
  
  ${({ renderBulletIcon, noBullets }) => (renderBulletIcon || noBullets) ? 'padding-left: 0;' : ''};
`

export const StyledLi = styled.li`
  color: ${({ theme }) => theme?.list?.color};
  align-items: center;
  display: ${({ renderBulletIcon }) => renderBulletIcon ? 'flex' : 'list-item'};
  font-size: ${fontSizes.md}px;
  margin-left: ${({ renderBulletIcon, iconSize }) => renderBulletIcon ? `-${iconSize + units.micro}px` : 0};
  line-height: 1.5;
  ${({ noBulletsOnItems, i }) => noBulletsOnItems && noBulletsOnItems.length > 0 && noBulletsOnItems.indexOf(i) > -1 ? 'list-style-type: none;' : ''}

  &:not(:last-child) {
    margin-bottom: ${({ verticalSpacing }) => verticalSpacing ? `${units[verticalSpacing]}px` : 0};
  }
`

const StyledUl = getStyledList('ul');
const StyledOl = getStyledList('ol');

const StyledList = ({ type = 'ul', children, ...rest }) => (
  type === 'ul'
    ? <StyledUl {...rest}>{children}</StyledUl>
    : <StyledOl {...rest}>{children}</StyledOl>
)

/**
 * Primary UI component for user interaction
 */
const List = ({ type = 'ul', items, verticalSpacing, renderBulletIcon, noBullets, noBulletsOnItems = [], iconSize = 12 }) => {
  return (
    <StyledList type={type} verticalSpacing={verticalSpacing} renderBulletIcon={renderBulletIcon} noBullets={noBullets}>
      {items && items.map((item, i) => (
        <StyledLi 
          i={i} 
          verticalSpacing={verticalSpacing} 
          renderBulletIcon={renderBulletIcon} 
          noBulletsOnItems={noBulletsOnItems} 
          iconSize={iconSize} 
          key={i}
        >
          {renderBulletIcon && React.cloneElement(renderBulletIcon, { width: iconSize, height: iconSize})} {item}
        </StyledLi>
      ))}
    </StyledList>
  );
};

List.propTypes = {
  iconSize: PropTypes.number,
  type: PropTypes.string,
};

List.startingProps = {
  type: 'ul',
};

export default List
