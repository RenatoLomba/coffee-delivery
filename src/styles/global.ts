import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors['yellow-500']};
  }

  ::selection {
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors['yellow-500']};
  }

  ::-moz-selection {
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors['yellow-500']};
  }

  ::-webkit-scrollbar {
    display: none;
  }

  body {
    background: ${(props) => props.theme.colors['gray-100']};
    color: ${(props) => props.theme.colors['gray-700']};
    -webkit-font-smoothing: antialiased;
    padding: 0 2rem;
  }

  body, input, textarea, button {
    font-family: ${(props) => props.theme.fontFamilies.roboto};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    line-height: 1.6;
    font-size: ${(props) => props.theme.fontSizes.text.md};
  }

  h1, h2, h3, h4 {
    font-family: ${(props) => props.theme.fontFamilies.baloo2};
    line-height: 1.3;
  }

  h1, h2 {
    font-weight: ${(props) => props.theme.fontWeights.extrabold};
  }

  h2, h3, h4 {
    color: ${(props) => props.theme.colors['gray-800']};
  }

  h1 {
    font-size: ${(props) => props.theme.fontSizes.heading.lg};
    color: ${(props) => props.theme.colors['gray-900']};
  }

  h2 {
    font-size: ${(props) => props.theme.fontSizes.heading.md};
  }

  h3 {
    font-size: ${(props) => props.theme.fontSizes.heading.sm};
  }

  h4 {
    font-size: ${(props) => props.theme.fontSizes.heading.xs};
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
`
