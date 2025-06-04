type ColorShades = {
  lightest?: string;
  light?: string;
  main: string;
  dark?: string;
  darkest?: string;
  contrast?: string;
};

type NeutralShades = {
  light: string;
  medium: string;
  dark: string;
  darkest: string;
};

type FontColors = {
  primary: string;
  secondary: string;
  inverse: string;
};

type BaseColor = {
  main: string;
  soft?: string;
};

export const UiColors: {
  primary: ColorShades;
  secondary: ColorShades;
  tertiary: ColorShades;
  neutral: NeutralShades;
  black: BaseColor;
  white: BaseColor;
  font: FontColors;
} = {
  primary: {
    lightest: '#faebf6',
    light: '#FFB6C1',
    main: '#FF5A7D',
    dark: '#E6456B',
    darkest: '#B13253',
    contrast: '#FFFFFF',
  },
  secondary: {
    light: '#FEE4D1',
    main: '#FF9F45',
    dark: '#CC7F38',
    contrast: '#1E1E1E',
  },
  tertiary: {
    light: '#D7FBE8',
    main: '#34D399',
    dark: '#10B981',
    contrast: '#1E1E1E',
  },
  neutral: {
    light: '#F5F5F5',
    medium: '#D1D1D1',
    dark: '#7A7A7A',
    darkest: '#3A3A3A',
  },
  black: {
    main: '#1E1E1E',
    soft: '#2E2E2E',
  },
  white: {
    main: '#FFFFFF',
    soft: '#FAFAFA',
  },
  font: {
    primary: '#1E1E1E',
    secondary: '#7A7A7A',
    inverse: '#FFFFFF',
  },
};
