import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import HomeBanner from "../components/homeBanner"
import FullLogo from "../components/images/fullLogo"

import SEO from "../components/seo"

const LogoContainer = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    width: 200px;
  }
`

const IndexPage = props => {
  const modalOpen = props.location.state.modalOpen
  return (
    <Layout modalOpen={modalOpen}>
      <SEO title="Home" />
      <HomeBanner />
      <LogoContainer>
        <div>
          <FullLogo />
        </div>
      </LogoContainer>
    </Layout>
  )
}

export default IndexPage
