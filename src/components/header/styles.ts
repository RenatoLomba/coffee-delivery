import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 104px;
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  & > a {
    width: 85px;
    height: 40px;
  }

  nav {
    display: flex;
    gap: 0.75rem;

    a {
      font-weight: ${(props) => props.theme.fontWeights.bold};
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0 0.25rem;

      & > svg {
        transform: translateY(-1px);
      }

      &:active {
        color: ${(props) => props.theme.colors['yellow-500']};
      }

      @media screen and (max-width: 488px) {
        display: none;
      }
    }

    & > span {
      background: ${(props) => props.theme.colors['purple-300']};
      border-radius: ${(props) => props.theme.radius.md};
      color: ${(props) => props.theme.colors['purple-700']};
      display: flex;
      align-items: center;
      padding: 0.625rem;
      font-size: ${(props) => props.theme.fontSizes.text.md};
      user-select: none;

      svg {
        margin-right: 0.25rem;
        color: ${(props) => props.theme.colors['purple-500']};
      }
    }

    button {
      background: ${(props) => props.theme.colors['yellow-300']};
      border-radius: ${(props) => props.theme.radius.md};
      border: 0;
      color: ${(props) => props.theme.colors['yellow-700']};
      padding: 0.625rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`
