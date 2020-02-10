import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ContentGrid, Wrapper } from "../components/styles/contentGrid"

const Calendar = props => {
  const modalOpen = props.location.state.modalOpen

  // TODO: Design compenent with props that holds calendar events
  // * Should have a more info event that will expand with more info if available
  return (
    <Layout modalOpen={modalOpen}>
      <SEO title="Calendar" />
      <ContentGrid>
        <Wrapper>
          <h1>Calendar</h1>
          <h3>Below are our upcoming events:</h3>
        </Wrapper>
      </ContentGrid>
    </Layout>
  )
}

export default Calendar
