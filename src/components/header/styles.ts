import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 104px;
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    gap: 0.75rem;

    span {
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
