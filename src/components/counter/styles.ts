import styled from 'styled-components'

export const CounterContainer = styled.div`
  width: 4.5rem;
  height: 2.375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.colors['gray-400']};
  padding: 0 0.5rem;
  border-radius: ${(props) => props.theme.radius.md};

  span {
    color: ${(props) => props.theme.colors['gray-900']};
    font-size: ${(props) => props.theme.fontSizes.text.lg};
    user-select: none;
  }

  button {
    background: transparent;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${(props) => props.theme.colors['purple-500']};

    &:hover {
      color: ${(props) => props.theme.colors['purple-700']};
    }
  }
`
