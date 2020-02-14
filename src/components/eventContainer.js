import React from "react"
import styled from "styled-components"

import { ContentGrid, Wrapper } from "../components/styles/content"

const EventContainer = styled.div`
  width: 100%;
  box-shadow: ${props => props.theme.bs};
  background: ${props => props.theme.white};
  border-radius: 8px;
  margin-bottom: 20px;
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

const EventContainer2 = props => {
  return (
    <EventContainer>
      <DateBox>
        <h1 className="date">{props.sample.date}</h1>
        <p className="day">{props.sample.day}</p>
      </DateBox>
      <InfoBox>
        <h3 className="event-title">{props.sample.title}</h3>
        <hr className="divider" />
        <h6 className="address">{props.sample.address}</h6>
        <p className="event-info">{props.sample.info}</p>
        <h5 className="time-contact">{props.sample.contact}</h5>
      </InfoBox>
    </EventContainer>
  )
}

export default EventContainer2
