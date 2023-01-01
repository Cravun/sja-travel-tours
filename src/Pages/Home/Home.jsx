// === Styled ===
import { device } from "../../MediaQuery";
import styled from "styled-components";
import HomeHero from "./HomeHero";
import Destination from "../../Components/Destination/Destination";
import Footer from "../../Components/Footer/Footer";
import DestionationForm from "../../Components/Destination/DestinationForm";
const Container = styled.div``;

const Home = () => {
  return (
    <Container>
      <HomeHero />
      <Destination />
      <DestionationForm />
      <Footer />
    </Container>
  );
};
export default Home;
