import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Event from "../components/eventContainer"
import SEO from "../components/seo"
import { ContentGrid, Wrapper } from "../components/styles/content"

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
  {
    month: "February",
    date: "22",
    day: "Saturday",
    title: "Video Podcast Production",
    address: "3100 NW Bucklin Hill Rd. Silverdale, WA 98383 ",
    info:
      "Come join Robby Vandenohle for a night of discussion, debate, and debauchery. As a guest on the Hachi Kuchi Video Podcast help us explore art, government, philosophy and more.",
    contact: "8:00pm | Info: Robby at (360) 201-7214",
  },
  {
    month: "March",
    date: "7",
    day: "Saturday",
    title: "Video Podcast Production",
    address: "3100 NW Bucklin Hill Rd. Silverdale, WA 98383 ",
    info:
      "Come join Robby Vandenohle for a night of discussion, debate, and debauchery. As a guest on the Hachi Kuchi Video Podcast help us explore art, government, philosophy and more.",
    contact: "8:00pm | Info: Robby at (360) 201-7214",
  },
  {
    month: "March",
    date: "21",
    day: "Saturday",
    title: "Video Podcast Production",
    address: "3100 NW Bucklin Hill Rd. Silverdale, WA 98383 ",
    info:
      "Come join Robby Vandenohle for a night of discussion, debate, and debauchery. As a guest on the Hachi Kuchi Video Podcast help us explore art, government, philosophy and more.",
    contact: "8:00pm | Info: Robby at (360) 201-7214",
  },
  {
    month: "April",
    date: "4",
    day: "Saturday",
    title: "Video Podcast Production",
    address: "3100 NW Bucklin Hill Rd. Silverdale, WA 98383 ",
    info:
      "Come join Robby Vandenohle for a night of discussion, debate, and debauchery. As a guest on the Hachi Kuchi Video Podcast help us explore art, government, philosophy and more.",
    contact: "8:00pm | Info: Robby at (360) 201-7214",
  },
  {
    month: "April",
    date: "18",
    day: "Saturday",
    title: "Video Podcast Production",
    address: "3100 NW Bucklin Hill Rd. Silverdale, WA 98383 ",
    info:
      "Come join Robby Vandenohle for a night of discussion, debate, and debauchery. As a guest on the Hachi Kuchi Video Podcast help us explore art, government, philosophy and more.",
    contact: "8:00pm | Info: Robby at (360) 201-7214",
  },
]

const filterEvents = (eventList, month) => {
  return eventList
    .filter(event => event.month === month)
    .sort((a, b) => a.date - b.date)
    .map(event => {
      return <Event event={event} />
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
