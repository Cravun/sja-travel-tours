import styled from "styled-components";
import { device } from "../../MediaQuery";
// === Components
import AboutHero from "./AboutHero";

const Container = styled.div``;

const AboutCont = styled.div`
  margin: 4rem 6rem;
  color: #2a2a2a;
  text-align: start;
  @media ${device.BreakPoint} {
    margin: 4rem 2rem;
  }
  h1 {
    padding-bottom: 1rem;
  }
  .about-container p {
    padding-bottom: 2rem;
  }
`;
export const About = () => {
  return (
    <Container>
      <AboutHero />
      <AboutCont>
        <h1>Our History</h1>
        <p>
          Sja Travel & Tours is a Travel Services and SJA travel & tours
          specialize in providing hassle-free, convenient, and excellent
          customer service. service experience throughout the years.
        </p>

        <h1>Our Mission</h1>
        <p>
          To provide our clients with the highest-quality service that not only
          we can offer, but also that they deserve. To exceed expectations and
          to take away from the stress and difficulties of travel, and to have
          in their place a memorable and enjoyable travel experience.
        </p>

        <h1>Our Vision</h1>
        <p>
          To lead advancements and innovations in the travel industry, and to
          establish ourselves as one of the leading travel agencies in the
          Philippines.
        </p>
      </AboutCont>
    </Container>
  );
};
export default About;
