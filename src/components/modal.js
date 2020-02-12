import React, { useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"

import facebookLogo from "../images/facebook-logo.png"
import {
  FaHome,
  FaMicrophone,
  FaCalendarAlt,
  FaChalkboardTeacher,
} from "react-icons/fa"

const ModalContainer = styled.div`
  min-height: calc(100vh - ${props => props.theme.headerHeight});
  width: 100%;
  position: fixed;
  z-index: 1;
  background: rgba(0, 0, 0, 0.6);
`

const InnerModal = styled.div`
  min-height: calc(100vh - ${props => props.theme.headerHeight});
  width: 60%;
  background: ${props => props.theme.orange};
  border-top: 2px solid ${props => props.theme.black};
  transform: translateY(0);
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
    color: inherit;
  }
  h3 {
    padding: 20px;
    margin: 0px;
    width: 100%;
    &:hover {
      cursor: pointer;
      background: ${props => props.theme.black};
      color: ${props => props.theme.tan};
      img {
        border-right: 1px solid ${props => props.theme.tan};
      }
    }
  }
  img {
    padding: 0 6px 0 0;
    border-right: 1px solid ${props => props.theme.black};
    margin: 0 8px 0 0;
  }
`

const FacebookLink = styled.a`
  margin: auto 0 67px 0;
`

const ModalLinkText = styled.h3`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 10px;
  align-items: center;
`

const Modal = ({ displayNavModal, setDisplayNavModal }) => {
  let inner = React.createRef()

  const handleClick = e => {
    if (e.target !== inner.current) {
      setDisplayNavModal(false)
    }
  }

  useEffect(() => {
    const handleKeyPress = e => {
      if (displayNavModal && e.key === "Escape") {
        setDisplayNavModal(false)
        document.removeEventListener("keydown", handleKeyPress)
      }
    }

    if (displayNavModal) {
      document.addEventListener("keydown", handleKeyPress)
    }
  })

  // TODO: add social media icons/links at bottom of nav links

  return (
    <CSSTransition
      in={displayNavModal}
      timeout={200}
      classNames="modal"
      unmountOnExit
    >
      <ModalContainer onClick={handleClick}>
        <InnerModal ref={inner}>
          <Link to="/" state={{ modalOpen: displayNavModal }}>
            <ModalLinkText>
              <FaHome />
              Home
            </ModalLinkText>
          </Link>
          <Link to="/perform/" state={{ modalOpen: displayNavModal }}>
            <ModalLinkText>
              <FaMicrophone /> Perform
            </ModalLinkText>
          </Link>
          <Link to="/teach/" state={{ modalOpen: displayNavModal }}>
            <ModalLinkText>
              <FaChalkboardTeacher /> Teach
            </ModalLinkText>
          </Link>
          <Link to="/calendar/" state={{ modalOpen: displayNavModal }}>
            <ModalLinkText>
              <FaCalendarAlt /> Events
            </ModalLinkText>
          </Link>
          <FacebookLink
            href="https://www.facebook.com/hachikuchiartistcollective/"
            target="_blank"
          >
            <h3>
              <img src={facebookLogo} alt="facebookLogo" height="22px" />
              Join us on Facebook
            </h3>
          </FacebookLink>
        </InnerModal>
      </ModalContainer>
    </CSSTransition>
  )
}

Modal.propTypes = {
  displayNavModal: PropTypes.bool,
}

export default Modal
