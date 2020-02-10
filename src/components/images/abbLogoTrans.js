import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const LogoContainer = styled.div`
  width: 75px;
  margin: 0;
  padding: 0;
  border-right: black 2px solid;
`
const Logo = styled(Img)`
  max-width: 100%;
  max-height: 100%;
  margin-right: 5px;
  img {
    margin: 0;
  }
`

const AbbLogoTrans = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "abbreviatedLogo-trans.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <LogoContainer>
      <Logo fluid={data.placeholderImage.childImageSharp.fluid} />
    </LogoContainer>
  )
}

export default AbbLogoTrans
