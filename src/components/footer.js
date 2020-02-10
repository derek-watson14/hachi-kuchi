import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  background: ${props => props.theme.orange};
  align-self: end;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: 50px;
  align-items: center;
  justify-items: center;

  p {
    grid-column: 2 / -2;
    margin: 0;
  }
`

const Footer = () => (
  <StyledFooter>
    <p>Copyright Hachi Kuchi {new Date().getFullYear()}</p>
  </StyledFooter>
)

export default Footer
