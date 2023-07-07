import breakpointStyles from './breakpoints';
import units from '../definitions/units';

const isGapRule = rule => rule.toLowerCase().indexOf('gap') > -1;
const getGapRule = ({ rules, key, bp }) => {
  const useUnits = !!bp 
    ? !!units[rules[key][bp]] 
    : !!units[rules[key]];

  return isGapRule(key) && useUnits
    ? !!bp
      ? `${units[rules[key][bp]]}px`
      : `${units[rules[key]]}px`
        : false
}

export default function containerRules(rules) {
  const {
    gridTemplateColumns,
    gridTemplateRows,
    gridTemplateAreas,
    gridTemplate,
    columnGap,
    rowGap,
    gap,
    justifyItems,
    alignItems,
    placeItems,
    justifyContent,
    alignContent,
    gridAutoColumns,
    gridAutoRows,
    gridAutoFlow,
    gridRow,
    grid,
    justifySelf,
    alignSelf,
    gridColumnStart,
    gridColumnEnd,
    gridRowStart,
    gridRowEnd,
    gridColumn,
    gridArea,
    placeSelf,
    position,
    display,
    maxWidth,
    maxHeight,
    minWidth,
    minHeight,
    width,
    height,
    top,
    left,
    bottom,
    right,
    transform,
    transition,
    background,
    zIndex,
    padding,
    cursor,
    border,
    borderRadius,
    borderTop,
    borderBottom,
    borderLeft,
    borderRight,
    boxSizing,
    opacity,
    overflowX,
    overflowY,
    color,
    pointerEvents,
    float,
    margin,
    textDecoration,
  } = rules;

  return breakpointStyles({ 
    rules: {
      gridTemplateColumns,
      gridTemplateRows,
      gridTemplateAreas,
      gridTemplate,
      columnGap,
      rowGap,
      gap,
      justifyItems,
      alignItems,
      placeItems,
      justifyContent,
      alignContent,
      gridAutoColumns,
      gridAutoRows,
      gridAutoFlow,
      gridRow,
      grid,
      justifySelf,
      alignSelf,
      gridColumnStart,
      gridColumnEnd,
      gridRowStart,
      gridRowEnd,
      gridColumn,
      gridArea,
      placeSelf,
      position,
      display,
      maxWidth,
      maxHeight,
      minWidth,
      minHeight,
      width,
      height,
      top,
      left,
      bottom,
      right,
      transform,
      transition,
      background,
      zIndex,
      padding,
      cursor,
      border,
      borderRadius,
      borderTop,
      borderBottom,
      borderLeft,
      borderRight,
      boxSizing,
      opacity,
      overflowX,
      overflowY,
      color,
      pointerEvents,
      float,
      margin,
      textDecoration,
    },
    cb: getGapRule 
  });
}