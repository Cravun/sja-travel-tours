// === Styled ===

import styled from "styled-components";
import HomeHero from "./HomeHero";
import Destination from "../../Components/Destination/Destination";
import Footer from "../../Components/Footer/Footer";
import { Trip } from "../../Components/Trip/Trip";
const Container = styled.div``;

const Home = () => {
  return (
    <Container>
      <HomeHero />
      <Destination />

      <Trip />
      <Footer />
    </Container>
  );
};
export default Home;
