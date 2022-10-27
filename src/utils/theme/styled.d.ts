// import original module declarations
import 'styled-components';

// and extend them! add new field whenever you wish to extend your theme, or alter it
declare module 'styled-components' {
  export interface DefaultTheme {
    borders: string[];
    radii: { none: string; normal: string; round: string };
    colors: {
      text: string;
      textDimmed: string;
      background: string;
      backgroundAlt: string;
      borderColor: string;
      accent: string;
    };
    fontSizes: {
      caption: string;
      title: string;
      titleSM: string;
      textRegular: string;
      invoiceHeading: string;
    };
    fontWeights: number[];
    lineHeights: {
      solid: number;
      title: number;
      copy: number;
    };
    space: number[];
    shadows: {
      boxShadow: { [k: string]: string };
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      laptop: string;
      desktop: string;
    };
  }
}
