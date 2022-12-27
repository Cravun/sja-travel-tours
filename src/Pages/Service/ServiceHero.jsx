import Service_Hero from "../../assets/png/Service_Hero.jpg";

// === Styled ===
import { Hero, Heading, Container } from "../Home/HomeHero";

const ServiceHero = () => {
  return (
    <>
      <Hero>
        <img alt="Service-Hero" src={Service_Hero} />
      </Hero>
      <Container>
        <Heading>Your Journey, Your Story</Heading>
      </Container>
    </>
  );
};

export default ServiceHero;
