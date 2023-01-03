import styled from "styled-components";

// === Component
import ServiceHero from "./ServiceHero";
import { Trip } from "../../Components/Trip/Trip";
const Container = styled.div``;

const Service = () => {
  return (
    <>
      <Container>
        <ServiceHero />
        <Trip />
      </Container>
    </>
  );
};
export default Service;
