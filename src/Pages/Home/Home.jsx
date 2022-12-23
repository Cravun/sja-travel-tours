// === Styled ===
import { device } from "../../MediaQuery";
import styled from "styled-components";
import HomeHero from "./HomeHero";

const Container = styled.div``;

export const Home = () => {
  return (
    <Container>
      <HomeHero />
    </Container>
  );
};
export default Home;
