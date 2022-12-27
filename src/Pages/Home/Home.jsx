// === Styled ===
import { device } from "../../MediaQuery";
import styled from "styled-components";
import HomeHero from "./HomeHero";
import Destination from "../../Components/Destination/Destination";

const Container = styled.div``;

const Home = () => {
  return (
    <Container>
      <HomeHero />
      <Destination />
    </Container>
  );
};
export default Home;
