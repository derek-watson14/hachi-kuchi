import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import styled from "styled-components"

import AbbLogoTrans from "./images/abbLogoTrans"
import NavMenu from "./navmenu"

const StyledHeader = styled.header`
  background: ${props => props.theme.orange};
  height: ${props => props.theme.headerHeight};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`

const HeaderLogoLink = styled(Link)`
  color: ${props => props.theme.black};
  text-decoration: none;
  border: none;
  &:hover {
    color: ${props => props.theme.black};
    border: none;
  }
`

const HeaderLogo = styled.div`
  max-width: 315px;
  width: auto;
  margin-left: 9vw;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.orange};
  h1 {
    margin: 0 0 8px 8px;
  }
  @media (max-width: 900px) {
    margin-left: 2vw;
  }
`

const Header = props => {
  let initialScreenCheck
  if (typeof window !== `undefined`) {
    initialScreenCheck = window.matchMedia("(max-width: 700px)").matches
  }

  const [smallScreen, setSmallScreen] = useState(initialScreenCheck)

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.matchMedia("(max-width: 700px)").matches)
      console.log(smallScreen, props.displayNavModal)
      if (!smallScreen && props.displayNavModal) {
        props.setDisplayNavModal(false)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  // TODO: Figure out loading for banner image

  return (
    <StyledHeader>
      <HeaderLogoLink to="/">
        <HeaderLogo>
          <AbbLogoTrans />
          <h1>{props.siteTitle}</h1>
        </HeaderLogo>
      </HeaderLogoLink>
      <NavMenu
        smallScreen={smallScreen}
        displayNavModal={props.displayNavModal}
        setDisplayNavModal={props.setDisplayNavModal}
      />
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
