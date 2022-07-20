import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  min-height: calc(100vh - 104px);
  padding-top: 2.5rem;
  display: grid;
  grid-template-columns: minmax(448px, 3fr) 2fr;
  gap: 2rem;

  @media screen and (max-width: 966px) {
    grid-template-columns: 1fr;
  }

  h4 {
    margin-bottom: 1rem;
  }
`

export const OrderInfoSection = styled.section`
  .container {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .card:first-child {
    svg {
      color: ${(props) => props.theme.colors['yellow-700']};
    }
  }

  .card:last-child {
    svg {
      color: ${(props) => props.theme.colors['purple-500']};
    }
  }

  .card {
    background: ${(props) => props.theme.colors['gray-200']};
    padding: 2.5rem;
    border-radius: ${(props) => props.theme.radius.md};
    display: flex;
    flex-direction: column;
    gap: 2rem;

    header {
      display: flex;
      gap: 0.75rem;

      & > div {
        display: flex;
        flex-direction: column;
      }

      .title {
        font-size: ${(props) => props.theme.fontSizes.text.lg};
        color: ${(props) => props.theme.colors['gray-800']};
      }
    }
  }
`

export const OrderShippingAddressForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .form-row {
    width: 100%;
    display: flex;
    gap: 1rem;

    input {
      width: 100%;
      background: ${(props) => props.theme.colors['gray-300']};
      border: 1px solid ${(props) => props.theme.colors['gray-400']};
      padding: 0.75rem;
      border-radius: ${(props) => props.theme.radius.md};

      &::placeholder {
        color: ${(props) => props.theme.colors['gray-600']};
      }
    }

    input.w-4 {
      max-width: 200px;
    }

    input.w-1 {
      max-width: 60px;
    }

    @media screen and (max-width: 432px) {
      flex-direction: column;

      input.w-4 {
        max-width: 100%;
      }

      input.w-1 {
        max-width: 100%;
      }
    }
  }
`

export const OrderPaymentMethods = styled.div`
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

export const OrderSelectedCoffeeSection = styled.section`
  .container {
    background: ${(props) => props.theme.colors['gray-200']};
    padding: 2.5rem;
    border-radius: ${(props) => props.theme.radius.md};
  }
`

export const OrderSelectedCoffeeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .divider {
    width: 100%;
    height: 1px;
    background: ${(props) => props.theme.colors['gray-400']};
  }
`

export const OrderPricingTotal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  margin-top: 1.5rem;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    strong {
      font-size: ${(props) => props.theme.fontSizes.text.xl};
    }
  }
`

export const SubmitOrderButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors['yellow-500']};
  padding: 0.75rem 0;
  border-radius: ${(props) => props.theme.radius.md};
  margin-top: 1.5rem;
  border: none;
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors['yellow-700']};
  }
`
