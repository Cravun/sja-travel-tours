// === Styled ===
import styled from "styled-components";
import { PrimaryColor, SecondColor } from "../../Global";
import { device } from "../../MediaQuery";
import Home_BG from "../../assets/png/Home_BG.png";
import { Button } from "@mui/material";

const Container = styled.div`
  top: 26%;
  left: 10%;
  position: absolute;
  @media ${device.laptop} {
    top: 16%;
  }
  @media ${device.tablet} {
    top: 8%;
  }
  @media ${device.ipadMini} {
    top: 10%;
  }
  @media ${device.smallTablet} {
    top: 10%;
  }
  @media ${device.mobileL} {
    top: 10%;
  }
  a {
    display: flex;
    justify-content: center;
  }
  .Button {
    background: #f9f9f9;
    display: flex;
    justify-content: center;
    margin: auto;
    text-transform: none;
    top: 1.2em;
    padding: 0.6rem 1.6rem;
    font-weight: bold;
    letter-spacing: 1px;
    color: ${SecondColor};
    font-size: 1.4rem;
    &:hover {
      background: linear-gradient(
        121.09deg,
        rgba(255, 255, 255, 0.1) 33.36%,
        rgba(255, 255, 255, 0) 103.28%
      );
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      backdrop-filter: blur(22px);
    }
  }
`;

const Hero = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Heading = styled.h1`
   {
     {
      background: black;
      padding: 0;
      font-size: 3.2rem;
      text-align: center;
      font-weight: 800;
      width: 80vw;
      margin: auto;
      padding-top: 2.5em;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      @media ${device.ipadMini} {
        font-size: 2.4rem;
      }
      @media ${device.smallTablet} {
        font-size: 2.2rem;
      }
      @media ${device.surfaceDuo} {
        font-size: 2rem;
        padding: 0;
      }
    }
  }
`;

export const HomeHero = () => {
  return (
    <>
      <Hero>
        <img alt="Home-Hero" src={Home_BG} />
      </Hero>
      <Container>
        <Heading>
          Providing you with comfort and relaxation across the nation at the
          cheapest rates.
        </Heading>
        <Button className="Button" variant="elevated">
          Travel Plan
        </Button>
      </Container>
    </>
  );
};

export default HomeHero;
