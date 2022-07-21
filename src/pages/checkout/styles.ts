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

export const EmptyCartContainer = styled.div`
  height: calc(100vh - 104px);
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-size: ${(props) => props.theme.fontSizes.heading.lg};
    font-family: ${(props) => props.theme.fontFamilies.baloo2};
    font-weight: ${(props) => props.theme.fontWeights.extrabold};
    color: ${(props) => props.theme.colors['gray-500']};
    padding: 2rem 3rem;
    border: 5px dashed ${(props) => props.theme.colors['gray-500']};
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      color: ${(props) => props.theme.colors['yellow-500']};
      border-color: ${(props) => props.theme.colors['yellow-500']};
    }
  }
`
