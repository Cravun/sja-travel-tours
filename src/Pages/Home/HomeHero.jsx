// === Styled ===
import styled from "styled-components";
import { device } from "../../MediaQuery";
import Home_BG from "../../assets/png/Home_BG.png";

const Container = styled.div`
  a {
    text-align: center;
  }
`;

const Hero = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
  a {
    text-align: center;
  }
`;

const Heading = styled.h1`
   {
     {
      font-size: 3.2rem;
      text-align: center;
      width: 80vw;
      margin: auto;
      padding-top: 2.5em;
      @media ${device.ipadMini} {
        font-size: 2.4rem;
      }
      @media ${device.smallTablet} {
        font-size: 2.2rem;
      }
      @media ${device.ssurfaceDuo} {
        font-size: 2rem;
      }
    }
  }
`;

export const HomeHero = () => {
  return (
    <>
      <Container>
        <Hero>
          <img alt="Home-Hero" src={Home_BG} />
        </Hero>
        <Heading>
          Providing you with comfort and relaxation across the nation at the
          cheapest rates.
        </Heading>
        <a href="">Travel Plan</a>
      </Container>
    </>
  );
};

export default HomeHero;
