import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Media from "react-media"

import menuIcon from "../images/menu-icon.png"
import closeIcon from "../images/close-icon.png"
import { FaFacebookSquare } from "react-icons/fa"

const NavLinkContainer = styled.div`
  margin-left: auto;
  margin-right: 10vw;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 24px;
  align-items: center;
  @media (max-width: 900px) {
    margin-right: 2vw;
    grid-gap: 8px;
  }
`

const NavLink = styled(Link)`
  color: ${props => props.theme.black};
  font-weight: 550;
  letter-spacing: 0.1rem;
  padding: 12px 4px;
  text-decoration: none;
  margin: 0;
  transition: all 250ms;
  border-bottom: 2px solid ${props => props.theme.orange};
  &:hover {
    color: ${props => props.theme.tan};
    background: ${props => props.theme.black};
    border-bottom: 2px solid ${props => props.theme.tan};
  }
`

const SocialLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.black};
  padding: 12px 4px;
  margin: 0;
  transition: all 250ms;
  border-bottom: 2px solid ${props => props.theme.orange};
  display: flex;
  align-items: center;
  height: 51.6px;
  &:hover {
    color: ${props => props.theme.tan};
    background: ${props => props.theme.black};
    border-bottom: 2px solid ${props => props.theme.tan};
  }
`

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 4vw 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin: 0;
    padding: 0;
  }
  h2 {
    margin: 0;
    padding: 0;
  }
  &:hover {
    cursor: pointer;
  }
`

const ExpandedChoices = () => (
  <NavLinkContainer>
    <NavLink to="/perform/">Perform</NavLink>
    <NavLink to="/teach/">Teach</NavLink>
    <NavLink to="/calendar/">Calendar</NavLink>
    <SocialLink
      href="https://www.facebook.com/hachikuchiartistcollective/"
      target="_blank"
    >
      <FaFacebookSquare size={22} />
    </SocialLink>
  </NavLinkContainer>
)

const HamburgerMenu = props => {
  const handleClick = () => {
    props.setDisplayNavModal(!props.displayNavModal)
  }
  let iconContents

  if (props.displayNavModal) {
    iconContents = (
      <img
        src={closeIcon}
        alt="close navigation"
        onClick={handleClick}
        onKeyDown={handleClick}
      />
    )
  } else {
    iconContents = (
      <img
        src={menuIcon}
        alt="open navigation"
        onClick={handleClick}
        onKeyDown={handleClick}
      />
    )
  }

  return <IconContainer>{iconContents}</IconContainer>
}

const NavMenu = props => {
  return (
    <Media queries={{ large: { minWidth: 700 } }}>
      {matches =>
        matches.large ? (
          <ExpandedChoices />
        ) : (
          <HamburgerMenu
            displayNavModal={props.displayNavModal}
            setDisplayNavModal={props.setDisplayNavModal}
          />
        )
      }
    </Media>
  )
}

NavMenu.propTypes = {
  smallScreen: PropTypes.bool,
}

NavMenu.defaultProps = {
  siteTitle: false,
}

export default NavMenu
