import About_Hero from "../../assets/png/About_Hero.jpg";

// === Styled ===
import { Hero, Heading, Container } from "../Home/HomeHero";

export const AboutHero = () => {
  return (
    <>
      <Hero>
        <img alt="Home-Hero" src={About_Hero} />
      </Hero>
      <Container>
        <Heading>Your Journey Your Story</Heading>
      </Container>
    </>
  );
};
export default AboutHero;
