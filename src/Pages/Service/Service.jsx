import styled from "styled-components";

// === Component
import ServiceHero from "./ServiceHero";
import { Trip } from "../../Components/Trip/Trip";
import Footer from "../../Components/Footer/Footer";
const Container = styled.div``;

const Service = () => {
  return (
    <>
      <Container>
        <ServiceHero />
        <Trip />
      </Container>
      <Footer />
    </>
  );
};
export default Service;
