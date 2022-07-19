export const defaultTheme = {
  colors: {
    white: '#fff',

    'gray-100': '#fafafa',
    'gray-200': '#f3f2f2',
    'gray-300': '#ededed',
    'gray-400': '#e6e5e5',
    'gray-500': '#d7d5d5',
    'gray-600': '#8d8686',
    'gray-700': '#574f4d',
    'gray-800': '#403937',
    'gray-900': '#272221',

    'yellow-300': '#f1e9c9',
    'yellow-500': '#dbac2c',
    'yellow-700': '#c47f17',

    'purple-300': '#ebe5f9',
    'purple-500': '#8047f8',
    'purple-700': '#4b2995',
  },
  fontSizes: {
    text: {
      xs: '0.625rem',
      sm: '0.75rem',
      md: '0.875rem',
      lg: '1rem',
      xl: '1.125rem',
      '2xl': '1.25rem',
      '3xl': '1.5rem',
    },
    heading: {
      xs: '1.125rem',
      sm: '1.25rem',
      md: '2rem',
      lg: '3rem',
    },
  },
  fontFamilies: {
    roboto: `'Roboto', sans-serif`,
    baloo2: `'Baloo 2', cursive`,
  },
  fontWeights: {
    regular: 400,
    bold: 700,
    extrabold: 800,
  },
  radius: {
    md: '8px',
  },
}

export type DefaultThemeColors = keyof typeof defaultTheme.colors
