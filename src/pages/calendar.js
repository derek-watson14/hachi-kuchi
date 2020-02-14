import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import EventContainer2 from "../components/eventContainer"
import SEO from "../components/seo"
import { ContentGrid, Wrapper } from "../components/styles/content"

const EventContainer = styled.div`
  width: 100%;
  box-shadow: ${props => props.theme.bs};
  background: ${props => props.theme.white};
  border-radius: 8px;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 1fr;
  padding: 10px;
  grid-gap: 15px;
  align-items: center;
  @media (max-width: 525px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
  }
`

const DateBox = styled.div`
  border: 2px solid ${props => props.theme.orange};
  border-radius: 5px;
  background: ${props => props.theme.white};
  display: grid;
  grid-template-columns: 100px;
  grid-template-rows: repeat(4, 25px);
  grid-template-areas:
    "date"
    "date"
    "date"
    "day";
  justify-content: center;
  align-items: center;
  width: 100px;
  justify-self: center;
  .date {
    grid-area: date;
    text-align: center;
    margin: 0;
  }
  .day {
    grid-area: day;
    text-align: center;
    margin: 0;
    background: ${props => props.theme.orange};
    color: ${props => props.theme.white};
  }
  @media (max-width: 525px) {
    justify-self: center;
    margin-bottom: 8px;
  }
`

const InfoBox = styled.div`
  color: ${props => props.theme.black};
  padding: 5px;
  .event-title {
    margin-bottom: 7px;
  }
  .address {
    font-weight: 400;
    margin-bottom: 15px;
  }
  .divider {
    margin: 7px 0 10px 0;
  }
  .event-info {
    margin-bottom: 22px;
  }
  .time-contact {
    font-weight: 700;
  }
`

const events = [
  {
    month: "February",
    date: "29",
    day: "Saturday",
    title: "Community Gathering",
    address: "9923 Poplars Ave NW, Silverdale, WA 98383",
    info:
      "Join us for live music, painting, dance, and acting performances! We have dinner and drinks for all guests, and offer interactive booths, prizes, performances and community! You can have it all in one night at the Community Gathering.",
    contact: "5:00pm | Info: Tyler at (360) 621-9721",
  },
  {
    month: "April",
    date: "25",
    day: "Saturday",
    title: "Community Gathering",
    address: "9923 Poplars Ave NW, Silverdale, WA 98383",
    info:
      "Join us for live music, painting, dance, and acting performances! We have dinner and drinks for all guests, and offer interactive booths, prizes, performances and community! You can have it all in one night at the Community Gathering.",
    contact: "5:00pm | Info: Tyler at (360) 621-9721",
  },
  {
    month: "March",
    date: "13",
    day: "Friday",
    title: "Music Exploration",
    address: "3381 NW Bucklin Hill Rd, Silverdale, WA 98383",
    info:
      "Need help finding the right chord, getting that last verse written, or getting comfortable playing music with others? Come to our Music Exploration Group where we jam together, write together, and learn together!",
    contact: "5:00pm | Info: Tyler at (360) 621-9721",
  },
  {
    month: "March",
    date: "27",
    day: "Friday",
    title: "Music Exploration",
    address: "3381 NW Bucklin Hill Rd, Silverdale, WA 98383",
    info:
      "Need help finding the right chord, getting that last verse written, or getting comfortable playing music with others? Come to our Music Exploration Group where we jam together, write together, and learn together!",
    contact: "5:00pm | Info: Tyler at (360) 621-9721",
  },
  {
    month: "April",
    date: "10",
    day: "Friday",
    title: "Music Exploration",
    address: "3381 NW Bucklin Hill Rd, Silverdale, WA 98383",
    info:
      "Need help finding the right chord, getting that last verse written, or getting comfortable playing music with others? Come to our Music Exploration Group where we jam together, write together, and learn together!",
    contact: "5:00pm | Info: Tyler at (360) 621-9721",
  },
  {
    month: "April",
    date: "24",
    day: "Friday",
    title: "Music Exploration",
    address: "3381 NW Bucklin Hill Rd, Silverdale, WA 98383",
    info:
      "Need help finding the right chord, getting that last verse written, or getting comfortable playing music with others? Come to our Music Exploration Group where we jam together, write together, and learn together!",
    contact: "5:00pm | Info: Tyler at (360) 621-9721",
  },
  {
    month: "March",
    date: "6",
    day: "Friday",
    title: "Board Game Night",
    address: "1550 NE Riddell Rd #180, Bremerton, WA 98310",
    info:
      "Whether you have that artistic flair or not, we want you to be a part of the Hachi Kuchi. Join us for light acoustic music, fun games, and a drink or two at Crane’s Brewery!",
    contact: "5:00pm | Info: Tyler at (360) 621-9721",
  },
  {
    month: "March",
    date: "20",
    day: "Friday",
    title: "Board Game Night",
    address: "1550 NE Riddell Rd #180, Bremerton, WA 98310",
    info:
      "Whether you have that artistic flair or not, we want you to be a part of the Hachi Kuchi. Join us for light acoustic music, fun games, and a drink or two at Crane’s Brewery!",
    contact: "5:00pm | Info: Tyler at (360) 621-9721",
  },
  {
    month: "April",
    date: "3",
    day: "Friday",
    title: "Board Game Night",
    address: "1550 NE Riddell Rd #180, Bremerton, WA 98310",
    info:
      "Whether you have that artistic flair or not, we want you to be a part of the Hachi Kuchi. Join us for light acoustic music, fun games, and a drink or two at Crane’s Brewery!",
    contact: "5:00pm | Info: Tyler at (360) 621-9721",
  },
  {
    month: "April",
    date: "17",
    day: "Friday",
    title: "Board Game Night",
    address: "1550 NE Riddell Rd #180, Bremerton, WA 98310",
    info:
      "Whether you have that artistic flair or not, we want you to be a part of the Hachi Kuchi. Join us for light acoustic music, fun games, and a drink or two at Crane’s Brewery!",
    contact: "5:00pm | Info: Tyler at (360) 621-9721",
  },
]

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
        <Wrapper background="rgba(0, 0, 0, 0.66)">
          {events
            .filter(event => event.month === "February")
            .sort((a, b) => a.date > b.date)
            .map(event => {
              return <EventContainer2 sample={event} />
            })}
        </Wrapper>
        <Wrapper background="#F5F5F5">
          <h2 className="month-head">MARCH</h2>
        </Wrapper>
        <Wrapper background="rgba(0, 0, 0, 0.66)">
          {events
            .filter(event => event.month === "March")
            .sort((a, b) => a.date - b.date)
            .map(event => {
              return <EventContainer2 sample={event} />
            })}
        </Wrapper>
        <Wrapper background="#F5F5F5">
          <h2 className="month-head">APRIL</h2>
        </Wrapper>
        <Wrapper background="rgba(0, 0, 0, 0.66)">
          {events
            .filter(event => event.month === "March")
            .sort((a, b) => a.date - b.date)
            .map(event => {
              return <EventContainer2 sample={event} />
            })}
        </Wrapper>
      </ContentGrid>
    </Layout>
  )
}

export default Calendar
