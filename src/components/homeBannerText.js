import React, { useContext } from "react"
import { Link } from "gatsby"
import styled, { ThemeContext } from "styled-components"

import {
  TransparentButton,
  BannerButtonContaner,
} from "../components/styles/buttons"

const StyledBannerText = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / 1;
  margin: -17.5% 3% 0 12.5%;
  color: ${props => props.theme.offWhite};
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  @media (min-width: 900px) {
    grid-column: 2 / span 1;
    color: white;
  }
  @media (max-width: 600px) {
    margin: 0 3% 0 3%;
  }
`

const TransparentBgH1 = styled.h1`
  background-color: ${props => props.theme.darkTransBg};
  color: ${props => props.theme.green};
  padding: 5px;
  margin: 0 0 10px 0;
  width: auto;
`

const TransparentBgP = styled.p`
  background-color: ${props => props.theme.darkTransBg};
  color: ${props => props.theme.white};
  padding: 5px;
  margin: 0 7% 10px 0;
  width: auto;
`

const HomeBannerText = () => {
  const theme = useContext(ThemeContext)

  return (
    <StyledBannerText>
      <TransparentBgH1>This is Hachi Kuchi.</TransparentBgH1>
      <TransparentBgP>
        We are an artist collective based in Silverdale, Washington which meets
        every Saturday at 6pm.
      </TransparentBgP>
      <TransparentBgP>
        <strong>We'd love to have you join us.</strong>
      </TransparentBgP>
      <BannerButtonContaner buttonCount={2}>
        <Link to="/teach/">
          <TransparentButton color={theme.orange}>
            Teach a class
          </TransparentButton>
        </Link>
        <Link to="/attend/">
          <TransparentButton color={theme.orange}>
            Attend an event
          </TransparentButton>
        </Link>
      </BannerButtonContaner>
    </StyledBannerText>
  )
}

export default HomeBannerText
