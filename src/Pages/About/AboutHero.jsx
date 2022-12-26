import About_Hero from "../../assets/png/About_Hero.png";

// === Styled ===
import styled from "styled-components";
import { device } from "../../MediaQuery";
import { Hero, Heading } from "../Home/HomeHero";

const Container = styled.div`
  top: 30%;
  left: 10%;
  position: absolute;
  ${"" /* 1366px */}
  @media ${device.laptop} {
    top: 22%;
  }
  ${"" /* 820px */}
  @media ${device.tablet} {
    top: 20%;
  }
  ${"" /* 768px */}
  @media ${device.ipadMini} {
    top: 14%;
  }
  ${"" /* 680px */}
  @media ${device.smallTablet} {
    top: 22%%;
  }
`;

export const AboutHero = () => {
  return (
    <>
      <Hero>
        <img alt="About-Hero" src={About_Hero} />
      </Hero>
      <Container>
        <Heading>About us</Heading>
      </Container>
    </>
  );
};
export default AboutHero;
