import styled from 'styled-components'

export const SuccessPageContainer = styled.div`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: minmax(280px, 1fr) minmax(246px, 492px);
  gap: 6.25rem;
  align-items: flex-end;

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
  }

  img {
    max-width: 100%;
  }

  h2 {
    color: ${(props) => props.theme.colors['yellow-700']};
  }

  & > p {
    font-size: ${(props) => props.theme.fontSizes.text['2xl']};
  }

  .order-info-card {
    margin-top: 2.5rem;
    padding: 2.5rem;

    border: 1px solid ${(props) => props.theme.colors['yellow-500']};

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem;
    gap: 2rem;

    border-radius: 6px 36px;

    .info {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      & > span {
        color: ${(props) => props.theme.colors.white};
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        border-radius: 50%;

        &.purple {
          background: ${(props) => props.theme.colors['purple-500']};
        }

        &.yellow {
          background: ${(props) => props.theme.colors['yellow-500']};
        }

        &.yellow-dark {
          background: ${(props) => props.theme.colors['yellow-700']};
        }
      }
    }
  }
`
