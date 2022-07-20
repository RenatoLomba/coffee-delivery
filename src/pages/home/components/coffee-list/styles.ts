import styled from 'styled-components'

export const CoffeeListContainer = styled.section`
  padding: 2rem 0;

  @media screen and (max-width: 540px) {
    header {
      text-align: center;
    }
  }

  main {
    padding-top: 3.375rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    gap: 2rem;

    @media screen and (max-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 840px) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 540px) {
      grid-template-columns: 1fr;
    }
  }
`
