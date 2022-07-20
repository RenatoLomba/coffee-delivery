import styled from 'styled-components'

export const OrderShippingAddressFormContainer = styled.div`
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
