import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"

import Header from "./header"
import Footer from "./footer"
import Modal from "./modal"
import "./layout.css"

const theme = {
  orange: "#FCA618",
  tan: "#EDDCCB",
  white: "#F5F5F5",
  black: "#101213",
  darkGrey: "#2A363B",
  grey: "#405059",
  green: "#73B06F",
  turquoise: "#0A837F",
  darkTransBg: "rgba(0, 0, 0, 0.80)",
  medTransBg: "rgba(0, 0, 0, 0.5)",
  lightTransBg: "rgba(0, 0, 0, 0.33)",
  headerHeight: "70px",
}

const StyledLayout = styled.div`
  background: ${props => props.theme.tan};
  min-height: calc(100vh - ${props => props.theme.headerHeight});
  margin-top: ${props => props.theme.headerHeight};

  display: grid;
  grid-template-rows: auto auto;
`

const Layout = ({ children }) => {
  const [displayNavModal, setDisplayNavModal] = useState(false)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  console.log(displayNavModal)

  return (
    <ThemeProvider theme={theme}>
      <Modal displayNavModal={displayNavModal} />
      <Header
        siteTitle={data.site.siteMetadata.title}
        displayNavModal={displayNavModal}
        setDisplayNavModal={setDisplayNavModal}
      />
      <StyledLayout>
        <main>{children}</main>
        <Footer />
      </StyledLayout>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
