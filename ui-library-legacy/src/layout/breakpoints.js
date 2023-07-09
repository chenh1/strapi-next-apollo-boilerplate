import { css } from 'styled-components';

export const breakpoints = {
  base: 320,
  sm: 480,
  md: 768,
  lg: 1200,
  xl: 1600
}

export const mq = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}px) {
        ${css(...args)}
      }
    `;
    return accumulator;
  },
  {}
);

const isObject = param => Object.prototype.toString.apply(param) === "[object Object]";

export default function breakpointStyles({ rules, cb }) {
  if (rules) {
    return Object.keys(rules).map(key => {
      let propName = key.split('').map(item => item === item.toUpperCase() ? `-${item.toLowerCase()}` : item).join('');
      //propName = propName.indexOf('element') > -1 ? propName.replace('element', '').toLowerCase() : propName
      
      if (isObject(rules[key])) {
        return Object.keys(rules[key]).map(bp => {
          return mq[bp]`
            ${propName}: ${( typeof cb === 'function' && cb({ rules, key, bp }) ) || rules[key][bp]};
          `.join('')
        }).join('')
      }

      if (rules[key]) {
        return `
          ${propName} : ${( typeof cb === 'function' && cb({ rules, key }) ) || rules[key]};
        `
      }

      return ''
    }).join('')
  }    

  return '';
}