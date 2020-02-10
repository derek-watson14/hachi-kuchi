import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"

import facebookBlack from "../images/facebook-black.png"

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
    }
  }
`

const SocialLinkContainer = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin: 0;
    padding: 0;
    height: 100%;
  }
`

const Modal = ({ displayNavModal, setDisplayNavModal }) => {
  const handleClick = e => {
    if (e.target !== inner.current) {
      setDisplayNavModal(false)
    }
  }

  let inner = React.createRef()

  // TODO: Close Modal with escape key
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
            <h3>Home</h3>
          </Link>
          <Link to="/attend/" state={{ modalOpen: displayNavModal }}>
            <h3>Attend</h3>
          </Link>
          <Link to="/teach/" state={{ modalOpen: displayNavModal }}>
            <h3>Teach</h3>
          </Link>
          <Link to="/calendar/" state={{ modalOpen: displayNavModal }}>
            <h3>Calender</h3>
          </Link>
        </InnerModal>
      </ModalContainer>
    </CSSTransition>
  )
}

Modal.propTypes = {
  displayNavModal: PropTypes.bool,
}

export default Modal
