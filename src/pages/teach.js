import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ContentGrid, Wrapper, SmallPara } from "../components/styles/content"
import { Link } from "gatsby"
import { LinkButtonLarge } from "../components/styles/buttons"
import { TiArrowForward } from "react-icons/ti"

const Teach = props => {
  const modalOpen = props.location.state.modalOpen

  return (
    <Layout modalOpen={modalOpen}>
      <SEO title="Teach" />
      <ContentGrid>
        <Wrapper>
          <h1>Teach</h1>
        </Wrapper>
        <Wrapper>
          <h3>Do you have an artisitic talent you would like to share?</h3>
          <p>Come to an event and teach others!*</p>
          <p>
            If you arrange with us in advance, we can assist you with set-up,
            tear down and sometimes even provide equipment. Just let us know
            what you will be teaching or presenting and we will work with you to
            handle the rest.
          </p>
          <p>
            Fill out the form linked below and we can arrage a booth to be set
            up for you:
          </p>
          <LinkButtonLarge>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe8GdYQIls1Em165cyJum7DyPdy9winmAIiFAQrv19CUTz6UQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Booth Sign Up <TiArrowForward />
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

export default Teach
