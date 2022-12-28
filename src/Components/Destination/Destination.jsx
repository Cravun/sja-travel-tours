// === Styled
import styled from "styled-components";
import { device } from "../../MediaQuery";
import { Button } from "@mui/material";
// === Images
import Taal1 from "../../assets/png/Taal/Taal1.jpg";
import Taal2 from "../../assets/png/Taal/Taal2.jpg";
import { FifthColor, FourthColor } from "../../Global";
const Container = styled.div`
  text-align: center;
  line-height: 1rem;
  h1 {
    font-size: 3.06rem;
  }
`;

const Heading = styled.div`
  width: 100%;
  h2 {
    text-align: start;
  }
  p {
    text-align: justify;
    line-height: 1.25rem;
  }
  .Button {
    text-align: center;
    color: ${FourthColor}
    ${"" /* White */}
    text-transform: none;
    ${"" /* Blue */}
    background: ${FifthColor};
    &:hover {
    }
    &:active{
      background:{FifthColor};
    }
  }
`;
const Destination1 = styled.div`
  section {
    line-height: 1rem;
    margin: 4rem 6rem;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
  }
`;
const Image1 = styled.div`
  z-index: -99;
  position: relative;
  float: right;
  max-width: 30em;
  margin-left: auto;
  margin-right: auto;

  display: inline-flex;
  img {
    width: 49%;
    height: 350px;
    object-fit: cover;
    padding: 0em 0.4em 0em 0em;
    border-radius: 1em;
  }
`;

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
        <section>
          <Heading>
            <h2>Taal Lake, Batangas</h2>
            <p>
              The Taal Lake, also known as Talisay Lake and Bombón Lake, is a
              circular fresh water lake located in the Province of Batangas, in
              Southern Luzon, a remarkable haven for tourists both local and
              foreign, for its alluring and majestic view. It is nestled on the
              mountainous ridge of Batangas that forms a part of the caldera and
              home to almost 39,000 peace-loving and God-fearing people. At the
              lake, you can board a Filipino-made motorized outrigger boat and
              enjoy a 30-minute ride across the lake to the village of Talisay
              on Volcano Island.
            </p>
            <Button className="Button" variant="contained">
              See More
            </Button>
          </Heading>
          <Image1>
            <img alt="Taal Lake" src={Taal1}></img>
            <img alt="Taal Lake" src={Taal2}></img>
          </Image1>
        </section>
      </Destination1>
    </>
  );
};

export default Destination;
