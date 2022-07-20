import styled from 'styled-components'

export const CoffeeItemContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  padding: 0.5rem 0.25rem;
  align-items: center;

  img {
    width: 4rem;
    height: 4rem;
  }

  @media screen and (max-width: 360px) {
    flex-direction: column;
  }

  .coffee-details {
    flex: 1;
    width: 100%;

    header {
      gap: 0.75rem;
      display: flex;
      justify-content: space-between;
      font-size: ${(props) => props.theme.fontSizes.text.lg};
    }

    .cta {
      margin-top: 0.25rem;
      display: flex;
      gap: 0.5rem;

      @media screen and (max-width: 360px) {
        justify-content: space-between;
      }

      button.remove {
        cursor: pointer;
        background: ${(props) => props.theme.colors['gray-400']};
        padding: 0.5rem;
        display: flex;
        gap: 0.25rem;
        align-items: center;
        border-radius: ${(props) => props.theme.radius.md};
        font-size: ${(props) => props.theme.fontSizes.text.sm};
        border: 1px solid transparent;
        text-transform: uppercase;
        transition: all 0.2s ease;

        svg {
          color: ${(props) => props.theme.colors['purple-500']};
        }

        &:hover {
          background: ${(props) => props.theme.colors['gray-500']};
        }

        &:focus:not(.active) {
          box-shadow: 0 0 0 2px ${(props) => props.theme.colors['purple-500']};
        }
      }
    }
  }
`
