// === Styled
import styled from "styled-components";
import { device } from "../../MediaQuery";

// === Images
import Taal1 from "../../assets/png/Taal/Taal1.jpg";
import Taal2 from "../../assets/png/Taal/Taal2.jpg";
const Container = styled.div`
  text-align: center;
  line-height: 1rem;
`;

const Destination1 = styled.div`
  line-height: 1rem;
  text-align: center;
  h2 {
  }
  p {
  }
`;
const Image1 = styled.div``;

const Destination = () => {
  return (
    <>
      <Container>
        <h1>Popular Destinations</h1>
        <p>
          Tours give you the opportunity to see a lot within a set time frame.
        </p>
      </Container>
      <Destination1>
        <h2>Taal Lake, Batangas</h2>
        <p>
          The Taal Lake, also known as Talisay Lake and Bombón Lake, is a
          circular fresh water lake located in the Province of Batangas, in
          Southern Luzon, a remarkable haven for tourists both local and
          foreign, for its alluring and majestic view. It is nestled on the
          mountainous ridge of Batangas that forms a part of the caldera and
          home to almost 39,000 peace-loving and God-fearing people. At the
          lake, you can board a Filipino-made motorized outrigger boat and enjoy
          a 30-minute ride across the lake to the village of Talisay on Volcano
          Island.
        </p>
      </Destination1>
      <Image1>
        <img alt="Taal Lake" src={Taal1}></img>
        <img alt="Taal Lake" src={Taal2}></img>
      </Image1>
    </>
  );
};

export default Destination;
