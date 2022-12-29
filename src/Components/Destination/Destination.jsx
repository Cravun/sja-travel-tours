// === Styled ===
import styled from "styled-components";
import { device } from "../../MediaQuery";
import { Button } from "@mui/material";
// === Images ===
import Taal1 from "../../assets/png/Taal/Taal1.jpg";
import Taal2 from "../../assets/png/Taal/Taal2.jpg";
import { FifthColor, FourthColor } from "../../Global";
// === Components ===
import { DestinationData } from "../Destination/DestinationData";

const Container = styled.div`
  text-align: center;
  line-height: 1rem;
  h1 {
    font-size: 3.06rem;
    ${"" /* 820px */}
    @media ${device.tablet} {
      font-size: 2.53rem;
    }
    ${"" /* 540px */}
    @media ${device.surfaceDuo} {
      font-size: 2.4rem;
    }
    ${"" /* 425px */}
    @media ${device.mobileL} {
      font-size: 1.8rem;
    }
    ${"" /* 280 */}
    @media ${device.GalaxyFold} {
      font-size: 1.4rem;
    }
  }

  p {
    font-size: 1rem;
    ${"" /* 820px */}
    @media ${device.tablet} {
      font-size: 0.9rem;
    }
    ${"" /* 540px */}
    @media ${device.surfaceDuo} {
      font-size: 0.8rem;
    }
    ${"" /* 425px */}
    @media ${device.mobileL} {
      font-size: 0.7rem;
    }
    ${"" /* 280 */}
    @media ${device.GalaxyFold} {
      font-size: 0.5rem;
    }
  }
`;

const Heading = styled.div`
  width: 100%;
  h2 {
    text-align: start;
    font-size: 1.8rem;
    ${"" /* 280 */}
    @media ${device.GalaxyFold} {
      font-size: 1.2rem;
    }
  }
  p {
    font-size: 1.25rem;
    text-align: justify;
    line-height: 1.45rem;
    ${"" /* 375px */}
    @media ${device.mobileM} {
      font-size: 1rem;
    }
    ${"" /* 280 */}
    @media ${device.GalaxyFold} {
      font-size: 0.9rem;
    }
  }
  .Button {
    font-size: 1.4rem;
    position: inherit;
    text-align: center;
    color: ${FourthColor}

    ${"" /* White */}
    text-transform: none;

    ${"" /* Blue */}
    background: ${FifthColor};

    ${"" /* 280 */}
    @media ${device.GalaxyFold} {
      font-size: 1rem;
    }
    &:hover {
    }
    &:active{
      background:{FifthColor};
    }
  }
`;
const Destination1 = styled.div`
  line-height: 1rem;
  margin: 4rem 6rem;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  @media ${device.tablet} {
    margin: 4rem 2rem;
    display: block;
  }
  ${"" /* 280 */}
  @media ${device.GalaxyFold} {
    margin: 2rem 2rem;
    display: block;
  }
`;
const Image1 = styled.div`
  z-index: -99;
  padding-bottom: 4em;
  position: relative;
  float: right;
  max-width: 30em;
  margin-left: auto;
  margin-right: initial;
  background: linear-gradient(
    121.09deg,
    rgba(255, 255, 255, 0.1) 33.36%,
    rgba(255, 255, 255, 0) 103.28%
  );
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(22px);
  display: inline-flex;
  ${"" /* 1024px */}
  @media ${device.NestHub} {
    top: 4em;
    left: 3em;
  }
  ${"" /* 912px */}
  @media ${device.SurfacePro7} {
    top: 4em;
    left: 3em;
  }
  ${"" /* 820px */}
  @media ${device.tablet} {
    left: 2em;
    top: 1em;
    margin: auto;
    float: none;
    display: grid;
    grid-gap: 1em;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.ipadMini} {
    left: 0em;
  }
  @media ${device.surfaceDuo} {
    left: 0;
  }
  @media ${device.GalaxyFold} {
  }

  img {
    width: 49%;
    height: 350px;
    object-fit: cover;
    padding: 0em 0.4em 0em 0em;
    border-radius: 1em;

    ${"" /* 820px */}
    @media ${device.tablet} {
      width: 100%;
      padding: 0em 0.4em 0em 0em;
    }
    ${"" /* 280px */}
    @media ${device.GalaxyFold} {
      height: 200px;
    }
  }
  img:nth-child(2) {
    top: -10%;
    right: 0;
    @media ${device.tablet} {
      top: 0%;
    }
  }
`;

const Title = styled.div``;
const Description = styled.div`
  padding-bottom: 2em;
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
        <Heading>
          {DestinationData.map((item) => {
            return (
              <>
                <Title>
                  <h1>{item.title}</h1>
                </Title>
                <Description>
                  <p>{item.description}</p>
                  <Button className="Button" variant="contained">
                    See More
                  </Button>
                  <Image1>
                    <img alt="Taal Lake" src={Taal1}></img>
                    <img alt="Taal Lake" src={Taal2}></img>
                  </Image1>
                </Description>
              </>
            );
          })}
        </Heading>
      </Destination1>
    </>
  );
};

export default Destination;
