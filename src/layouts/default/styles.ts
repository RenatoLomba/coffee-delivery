import styled from 'styled-components'

export const DefaultLayoutContainer = styled.div`
  max-width: 1120px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  main {
    max-height: calc(100vh - 104px);
    overflow: auto;
  }
`
