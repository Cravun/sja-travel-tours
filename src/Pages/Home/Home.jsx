// === Styled ===
import { device } from "../../MediaQuery";
import styled from "styled-components";
import HomeHero from "./HomeHero";
import Destination from "../../Components/Destination/Destination";
import Footer from "../../Components/Footer/Footer";
const Container = styled.div``;

const Home = () => {
  return (
    <Container>
      <HomeHero />
      <Destination />
      <Footer />
    </Container>
  );
};
export default Home;
