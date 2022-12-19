// === Pictures ===
import Service1 from "../../assets/png/Service1.png";
import Service2 from "../../assets/png/Service2.png";
import Service3 from "../../assets/png/Service3.png";

// === Styled ===
import { device } from "../../MediaQuery";
import styled from "styled-components";

const Container = styled.div`
  h1 {
    font-size: 6vh;
    text-align: justify;
    width: 80vw;
    margin: auto;
    padding-top: 2.5em;
    @media ${device.ipadMini} {
      font-size: 3vh;
    }
  }
`;

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
      <h1>
        Providing you with comfort and relaxation across the nation at the
        cheapest rates.
      </h1>
      <BOOK_CONTAINER>
        <div className="Service">
          <img src={Service1} alt="Service 1" />
        </div>
        <div className="Service">
          <img src={Service2} alt="Service 2" />
        </div>
        <div className="Service">
          <img src={Service3} alt="Service 3" />
        </div>
      </BOOK_CONTAINER>
    </Container>
  );
};
export default Home;
