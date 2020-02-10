import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
// import { TransitionGroup, CSSTransition } from "react-transition-group"

const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
  background: rgba(0, 0, 0, 0.6);
`

const InnerModal = styled.div`
  height: 100%;
  width: 55%;
  background: ${props => props.theme.orange};
  border-top: 2px solid ${props => props.theme.black};
  transform: translateY(0);
`

const Modal = ({ displayNavModal }) => {
  let modal
  // const transitionOptions = {
  //   classNames: "order",
  //   key,
  //   timeout: { enter: 500, exit: 500 },
  // }

  if (displayNavModal) {
    modal = (
      <ModalContainer>
        <InnerModal />
      </ModalContainer>
    )
  } else {
    modal = ""
  }

  return modal
}

Modal.propTypes = {
  displayNavModal: PropTypes.bool,
}

export default Modal
