import styled from "styled-components"

export const ContentGrid = styled.div`
  padding-top: 25px;
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;

  @media (max-width: 699px) {
    grid-template-columns: 1fr 20fr 1fr;
  }

  h1,
  h3,
  p {
    grid-column: 2 / -2;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${props =>
    props.background ? props.background : props.theme.white};
  color: ${props => (props.color ? props.color : props.theme.black)};
  grid-column: 2 / span 1;
  padding: 25px;
  box-shadow: ${props => props.theme.bs};
  border-radius: 5px;
  margin-bottom: 25px;

  .month-head {
    margin: 0 15% 4px 15%;
    text-align: center;
    letter-spacing: 0.25em;
    font-weight: 500;
    padding-bottom: 6px;
    border-bottom: 2px black solid;
  }

  .solo-h1 {
    margin: 0;
    text-align: center;
  }

  .no-margin-p {
    margin: 0;
  }

  .section {
    margin-bottom: 30px;
    h2 {
      margin-bottom: 20px;
    }
    h4 {
      margin-bottom: 12px;
    }
    h5 {
      margin-bottom: 8px;
      span {
        font-weight: 400;
      }
    }
  }

  .contact-section {
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: ${props => props.theme.bs};
    width: auto;
  }

  @media (max-width: 625px) {
    grid-column: 1 / -1;
  }
`

export const SmallPara = styled.p`
  font-size: 0.75rem;
  margin-bottom: 10px;
`
