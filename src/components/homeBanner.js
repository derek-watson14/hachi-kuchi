import React from "react"
import styled from "styled-components"

import HomeBannerText from "./homeBannerText"

import stock from "../images/stock.jpg"
import stockMobile from "../images/stockMobile.jpg"

const BannerImageDarkener = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / 1;
  background: ${props => props.theme.lightTransBg};
  @media (min-width: 900px) {
    grid-column: 2 / span 1;
  }
`

const BannerStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  img {
    grid-column: 1 / -1;
    grid-row: 1 / 1;
    margin: 0;
  }
  .desktopImg {
    display: block;
  }
  .mobileImg {
    display: none;
  }
  @media (min-width: 900px) {
    grid-template-columns: 1fr 10fr 1fr;
    img {
      grid-column: 2 / span 1;
    }
  }
  @media (max-width: 600px) {
    .desktopImg {
      display: none;
    }
    .mobileImg {
      display: block;
    }
  }
`

const HomeBanner = () => {
  return (
    <BannerStyles>
      <img
        src={stock}
        alt="stage with instruments"
        className="bannerImg desktopImg"
      />
      <img
        src={stockMobile}
        alt="stage with instruments"
        className="bannerImg mobileImg"
      />
      <BannerImageDarkener />
      <HomeBannerText />
    </BannerStyles>
  )
}

export default HomeBanner
