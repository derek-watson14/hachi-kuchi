import styled from "styled-components"

export const BannerButtonContaner = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(${props => props.buttonCount} * 185px);
  margin-top: 15px;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    height: 85px;
  }
`

export const TransparentButton = styled.button`
    background: ${props => props.theme.medTransBg};
    color: #fca618;
    border: 2px solid ${props => props.color};
    border-radius: 5px;
    padding: 5px;
    width: 175px;
    font-size: 1.2rem;
    transition: all 0.2s;

    &:hover {
      background: ${props => props.color};
      color: ${props => props.theme.darkTransBg};
      cursor: pointer;
    }
  }
`

export const OpaqueButton = styled.button`
    background: #fca618;
    color: rgba(0, 0, 0, 0.9);
    border: 2px solid #fca618;
    border-radius: 5px;
    padding: 5px;
    width: 100px;
    font-size: 1.2rem;
    transition: all 0.2s;

    &:hover {
      background: transparent;
      border: 2px solid #fca618;
      color: #fca618;
      cursor: pointer;
    }
  }
`

export const LinkButtonLarge = styled.button`
    background: ${props => props.theme.orange};
    border: 2px solid ${props => props.theme.orange};
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 1.2rem;
    transition: all 0.2s;
    margin-bottom: 15px;

    a {
      text-decoration: none;
      font-size: 1rem;
      color: ${props => props.theme.black};
      display: grid;
      grid-gap: 5px;
      grid-template-columns: 1fr auto;
      align-items: center;
    }

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }
  }
`
