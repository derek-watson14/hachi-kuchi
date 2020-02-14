import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { ContentGrid, Wrapper } from "../components/styles/content"
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

const IndexPage = ({ location }) => {
  const modalOpen = location.state ? location.state.modalOpen : false
  return (
    <Layout modalOpen={modalOpen}>
      <SEO title="Home" />
      <HomeBanner />
      <ContentGrid>
        <Wrapper>
          <div className="section">
            <h2>Mission</h2>
            <p>
              Hachi Kuchi is an organization that strives to reconnect local
              communities of the modern day through creativity, group projects,
              education, and performing arts.
            </p>
          </div>
          <div className="section">
            <h2>About</h2>
            <p>
              Hachi Kuchi hosts a variety of events, mostly in Silverdale, with
              the aim of connecting local artists to one another. These events
              range from large, energetic events like our semi-monthly Community
              Gatherings, to our more frequent and smaller Focus Groups, where
              one topic is in the spotlight and is explored in a more intimate
              setting.
            </p>
            <p>
              We currently have Focus Groups planned for music exploration, a
              video podcast and even board games. In the future we hope to
              continue to add to this selection with the help of our members.
              See our <Link to="/calendar">calendar</Link> for full event
              information.
            </p>
          </div>
          <div className="section">
            <h2>Contact</h2>
            <div className="contact-container">
              <div className="contact-section">
                <h4>Community Gatherings</h4>
                <hr />
                <h5>
                  Director: <span>Tyler Smiley - (360) 621-9721</span>
                </h5>
                <h5>
                  Booking Manager:{" "}
                  <span>Jeffery Hennings - (206) 898-1994</span>
                </h5>
                <h5>
                  Booth Manager: <span>Robby Vandenhole - (360) 201-7214</span>
                </h5>
                <h5>
                  General Inquiries: <span>hachikuchi@gmail.com</span>
                </h5>
              </div>
              <div className="contact-section">
                <h4>Music Exploration</h4>
                <hr />
                <h5>
                  Chair: <span>Tyler Smiley - (360) 621-9721</span>
                </h5>
              </div>
              <div className="contact-section">
                <h4>Video Podcast</h4>
                <hr />
                <h5>
                  Chair: <span>Robby Vandenhole - (360) 201-7214</span>
                </h5>
              </div>
              <div className="contact-section">
                <h4>Board Game Night</h4>
                <hr />
                <h5>
                  Chair: <span>Tyler Smiley - (360) 271-7610</span>
                </h5>
              </div>
            </div>
          </div>
        </Wrapper>
      </ContentGrid>
      <LogoContainer>
        <div>
          <FullLogo />
        </div>
      </LogoContainer>
    </Layout>
  )
}

export default IndexPage
