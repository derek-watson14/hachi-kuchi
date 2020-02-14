import React from "react"

import Layout from "../components/layout"
import Event from "../components/eventContainer"
import events from "../events"
import SEO from "../components/seo"
import { ContentGrid, Wrapper } from "../components/styles/content"

const filterEvents = (eventList, month) => {
  return eventList
    .filter(event => event.month === month)
    .sort((a, b) => a.date - b.date)
    .map(event => {
      return <Event event={event} key={event.key} />
    })
}

const Calendar = ({ location }) => {
  const modalOpen = location.state ? location.state.modalOpen : false

  return (
    <Layout modalOpen={modalOpen}>
      <SEO title="Calendar" />
      <ContentGrid>
        <Wrapper background="#F5F5F5">
          <h1 className="solo-h1">Event Calendar</h1>
        </Wrapper>
        <Wrapper background="#F5F5F5">
          <h2 className="month-head">FEBRUARY</h2>
        </Wrapper>
        {filterEvents(events, "February")}
        <Wrapper background="#F5F5F5">
          <h2 className="month-head">MARCH</h2>
        </Wrapper>
        {filterEvents(events, "March")}
        <Wrapper background="#F5F5F5">
          <h2 className="month-head">APRIL</h2>
        </Wrapper>
        {filterEvents(events, "April")}
      </ContentGrid>
    </Layout>
  )
}

export default Calendar
