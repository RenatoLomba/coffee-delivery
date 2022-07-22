import styled from 'styled-components'

export const PaymentMethodsContainer = styled.div`
  span.error-message {
    color: ${(props) => props.theme.colors['red-500']};
    margin-bottom: 0.5rem;
    display: block;
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }
`

export const PaymentMethodItems = styled.div`
  display: flex;
  width: 100%;
  gap: 0.75rem;
  flex-wrap: wrap;

  .pay-card {
    cursor: pointer;
    max-width: 182px;
    width: 100%;
    background: ${(props) => props.theme.colors['gray-400']};
    padding: 1rem 1.25rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    border-radius: ${(props) => props.theme.radius.md};
    border: 1px solid transparent;
    transition: all 0.2s ease;

    &:focus {
      box-shadow: none;
    }

    &:focus:not(.active) {
      box-shadow: 0 0 0 2px ${(props) => props.theme.colors['purple-500']};
    }

    &.active {
      background: ${(props) => props.theme.colors['purple-300']};
      color: ${(props) => props.theme.colors['purple-500']};
      border-color: ${(props) => props.theme.colors['purple-500']};
    }

    span {
      text-transform: uppercase;
      font-size: ${(props) => props.theme.fontSizes.text.sm};
    }

    &:hover:not(.active) {
      background: ${(props) => props.theme.colors['gray-500']};
    }

    @media screen and (max-width: 432px) {
      max-width: 100%;
    }
  }
`
