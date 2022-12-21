// === Styled ===
import { device } from "../../MediaQuery";
import styled from "styled-components";
import HomeHero from "./HomeHero";

const Container = styled.div``;

const BOOK_CONTAINER = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-evenly;
  top: 4em;
`;

export const Home = () => {
  return (
    <Container>
      <HomeHero />
    </Container>
  );
};
export default Home;
