import styled from "styled-components"

export const ContentGrid = styled.div`
  padding-top: 25px;
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;

  @media (max-width: 600px) {
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
    props.background ? props.background : props.theme.tan};
  color: ${props => (props.color ? props.color : props.theme.black)};
  grid-column: 2 / span 1;
  padding: 25px;
  box-shadow: ${props => props.theme.bs};
  border-radius: 5px;
  margin-bottom: 25px;

  h1 {
    margin: 0;
    text-align: center;
  }

  @media (max-width: 600px) {
    grid-column: 1 / -1;
  }
`

export const SmallPara = styled.p`
  font-size: 0.75rem;
`
