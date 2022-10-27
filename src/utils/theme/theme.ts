import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  borders: ['0', '1px solid', '4px solid', '8px solid'],
  radii: {
    none: '0',
    normal: '0.5rem',
    round: '50%',
  },
  colors: {
    text: '#fff',
    textDimmed: '#adbdcc',
    background: '#0A2540',
    backgroundAlt: '#0d355e',
    borderColor: '#104470',
    accent: '#ffce48',
  },
  fontSizes: {
    caption: '1.8rem',
    title: '3.8rem',
    titleSM: '3.4rem',
    textRegular: '1.5rem',
    invoiceHeading: '2.1rem',
  },
  fontWeights: [400, 500, 700, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  shadows: {
    boxShadow: {
      none: 'none',
      sm: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;',
      md: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;',
      lg: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;',
    },
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    laptop: '900px',
    desktop: '1080px',
  },
};
