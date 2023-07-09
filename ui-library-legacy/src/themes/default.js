import colors from '../definitions/colors';
const { neon, neutral } = colors;

export default {
  name: "Default Theme",
  button: {
    primary: `
      color: white;
      background-color: #1ea7fd;
    `,
    secondary: `
      color: #333;
      background-color: transparent;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    `,
    sizes: {
      small: `
        font-size: 12px;
        padding: 10px 16px;
      `,
      medium: `
        font-size: 14px;
        padding: 11px 20px;
      `,
      large: `
        font-size: 16px;
        padding: 12px 24px;
      `
    }
  },
  dropdown: {
    background: 'transparent',
    color: neutral.broadway,
    borderWidth: '2px',
    borderColor: neutral.broadway,
    borderRadius: '4px',
    focusColor: neon.blue,
    disabledColor: neutral.darkGray,
  }
}