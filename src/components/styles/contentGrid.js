import styled from "styled-components"

export const ContentGrid = styled.div`
  padding-top: 25px;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;

  @media (max-width: 600px) {
    grid-template-columns: 1fr 12fr 1fr;
  }

  h1,
  h3,
  p {
    grid-column: 2 / -2;
  }
`
