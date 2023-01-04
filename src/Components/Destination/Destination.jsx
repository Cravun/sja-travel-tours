import { useState } from "react";
// === Styled ===
import styled from "styled-components";
import { device } from "../../MediaQuery";
import { Button } from "@mui/material";
import { FifthColor, FourthColor } from "../../Global";
// === Components ===
import DestionationBatangasForm from "./Batangas/DestinationBatangasForm";
import DestinationDataBatangas from "./Batangas/DestinationDataBatangas";

import DestionationBaguioForm from "./Baguio/DestinationBaguioForm";
import DestinationDataBaguio from "./Baguio/DestionationDataBaguio";

import DestinationCebuForm from "./Cebu/DestinationCebuForm";
import DestinationDataCebu from "./Cebu/DestionationDataCebu";

import DestionationBoholForm from "./Bohol/DestinationBoholForm";
import DestinationDataBohol from "./Bohol/DestinationDataBohol";

export const Container = styled.div`
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

export const Heading = styled.div`
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
export const Destination1 = styled.div`
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
export const Image1 = styled.div`
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

export const Title = styled.div``;
export const Description = styled.div`
  padding-bottom: 2em;
`;

const Destination = () => {
  const [formPopUp, SetFormPopup] = useState(false);
  const [formPopUp1, SetFormPopup1] = useState(false);
  return (
    <>
      <Container>
        <h1>Popular Destinations</h1>
        <p>
          Tours give you the opportunity to see a lot within a set time frame.
        </p>
      </Container>

      {/* Baguio Tour */}
      <Destination1>
        {DestinationDataBaguio.map((data) => {
          return (
            <>
              <Heading>
                <Title>
                  <h1>{data.title}</h1>
                </Title>
                <Description>
                  <p>{data.description}</p>
                  <Button
                    className="Button"
                    variant="contained"
                    onClick={() => SetFormPopup1(true)}
                  >
                    {data.button}
                  </Button>
                  <DestionationBaguioForm
                    trigger={formPopUp1}
                    setTrigger={SetFormPopup1}
                  />
                </Description>
              </Heading>
              <Image1>
                <img alt={data.ALT} src={data.thumbnail1}></img>
                <img alt={data.ALT} src={data.thumbnail2}></img>
              </Image1>
            </>
          );
        })}
      </Destination1>

      {/* Batangas Tour */}
      <Destination1>
        {DestinationDataBatangas.map((data) => {
          return (
            <>
              <Heading>
                <Title>
                  <h1>{data.title}</h1>
                </Title>
                <Description>
                  <p>{data.description}</p>
                  <Button
                    className="Button"
                    variant="contained"
                    onClick={() => SetFormPopup1(true)}
                  >
                    {data.button}
                  </Button>
                  <DestionationBatangasForm
                    trigger={formPopUp1}
                    setTrigger={SetFormPopup1}
                  />
                </Description>
              </Heading>
              <Image1>
                <img alt={data.ALT} src={data.thumbnail1}></img>
                <img alt={data.ALT} src={data.thumbnail2}></img>
              </Image1>
            </>
          );
        })}
      </Destination1>

      {/* Cebu Tour */}
      <Destination1>
        {DestinationDataCebu.map((data) => {
          return (
            <>
              <Heading>
                <Title>
                  <h1>{data.title}</h1>
                </Title>
                <Description>
                  <p>{data.description}</p>
                  <Button
                    className="Button"
                    variant="contained"
                    onClick={() => SetFormPopup1(true)}
                  >
                    {data.button}
                  </Button>
                  <DestinationCebuForm
                    trigger={formPopUp1}
                    setTrigger={SetFormPopup1}
                  />
                </Description>
              </Heading>
              <Image1>
                <img alt={data.ALT} src={data.thumbnail1}></img>
                <img alt={data.ALT} src={data.thumbnail2}></img>
              </Image1>
            </>
          );
        })}
      </Destination1>

      {/* Bohol Tour */}
      <Destination1>
        {DestinationDataBohol.map((data) => {
          return (
            <>
              <Heading>
                <Title>
                  <h1>{data.title}</h1>
                </Title>
                <Description>
                  <p>{data.description}</p>
                  <Button
                    className="Button"
                    variant="contained"
                    onClick={() => SetFormPopup(true)}
                  >
                    {data.button}
                  </Button>
                  <DestionationBoholForm
                    trigger={formPopUp}
                    setTrigger={SetFormPopup}
                  />
                </Description>
              </Heading>
              <Image1>
                <img alt={data.ALT} src={data.thumbnail1}></img>
                <img alt={data.ALT} src={data.thumbnail2}></img>
              </Image1>
            </>
          );
        })}
      </Destination1>
    </>
  );
};

export default Destination;
