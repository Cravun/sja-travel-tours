import About_Hero from "../../assets/png/About_Hero.jpg";

import styled from "styled-components";

const Hero = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const AboutHero = () => {
  return (
    <>
      <Hero>
        <img alt="Home-Hero" src={About_Hero} />
      </Hero>
    </>
  );
};
export default AboutHero;
