import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ContentGrid, Wrapper, SmallPara } from "../components/styles/content"
import { Link } from "gatsby"
import { LinkButtonLarge } from "../components/styles/buttons"
import { TiArrowForward } from "react-icons/ti"

const Perform = ({ location }) => {
  const modalOpen = location.state ? location.state.modalOpen : false

  return (
    <Layout modalOpen={modalOpen}>
      <SEO title="Perform" />
      <ContentGrid>
        <Wrapper>
          <h1 className="solo-h1">Perform</h1>
        </Wrapper>
        <Wrapper>
          <h3>No matter your art form - share your talent with others</h3>
          <p>
            It can be music, painting, dance, comedy or something else entirely:
            we love having new artists come to our events to show their skills.*
          </p>
          <p>
            There is a part of each event called <strong>Open Session</strong>,
            where artists have the opportunity to perform in front of their
            peers in a relaxed, welcoming environment. We are here to help with
            logistics in any way we can.
          </p>
          <p>Fill out the form linked below so we know when to expect you:</p>
          <LinkButtonLarge>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdfioxygbW3A_7seJeIrJn_-rBP3OvNIqpAjvia286q__vwBg/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Session Sign Up <TiArrowForward />
            </a>
          </LinkButtonLarge>
          <SmallPara>
            * See our <Link to="/calendar">calendar</Link> for full list of
            events
          </SmallPara>
        </Wrapper>
      </ContentGrid>
    </Layout>
  )
}

export default Perform
