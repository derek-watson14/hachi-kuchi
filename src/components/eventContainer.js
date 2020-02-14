import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"

const EventContainer = styled.div`
  width: 100%;
  box-shadow: ${props => props.theme.bs};
  background: ${props => props.theme.white};
  border-radius: 8px;
  margin-bottom: 20px;
  grid-column: 2 / span 1;
  box-shadow: ${props => props.theme.bs};
  border-radius: 5px;
  margin-bottom: 25px;
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
  background: ${props => props.theme.white};
  justify-self: center;
  .calendar-box {
    display: grid;
    grid-template-columns: 100px;
    grid-template-rows: repeat(5, 20px);
    grid-template-areas:
      "date"
      "date"
      "date"
      "date"
      "day";
    justify-content: center;
    align-items: center;
    width: 100px;
    border: 2px solid ${props => props.color};
    border-radius: 5px;
  }
  .month {
    grid-area: month;
    text-align: center;
    margin: 0 0 5px 0;
    font-size: 0.9rem;
    font-weight: 500;
    background: ${props => props.theme.white};
    color: ${props => props.theme.black};
  }
  .date {
    grid-area: date;
    text-align: center;
    margin: 0;
  }
  .day {
    grid-area: day;
    text-align: center;
    margin: 0;
    background: ${props => props.color};
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

const Event = props => {
  const theme = useContext(ThemeContext)

  const getCalendarColor = eventType => {
    let calendarColor
    switch (eventType) {
      case "Community Gathering":
        calendarColor = theme.orange
        break
      case "Board Game Night":
        calendarColor = theme.green
        break
      case "Music Exploration":
        calendarColor = theme.green
        break
      default:
        calendarColor = theme.green
        break
    }
    return calendarColor
  }

  return (
    <EventContainer>
      <DateBox color={getCalendarColor(props.event.title)}>
        <h4 className="month">{props.event.month}</h4>
        <div className="calendar-box">
          <h1 className="date">{props.event.date}</h1>
          <p className="day">{props.event.day}</p>
        </div>
      </DateBox>
      <InfoBox>
        <h3 className="event-title">{props.event.title}</h3>
        <hr className="divider" />
        <h6 className="address">{props.event.address}</h6>
        <p className="event-info">{props.event.info}</p>
        <h5 className="time-contact">{props.event.contact}</h5>
      </InfoBox>
    </EventContainer>
  )
}

export default Event
