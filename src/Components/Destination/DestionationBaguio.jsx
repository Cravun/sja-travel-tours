import { useState } from "react";
import { Button } from "@mui/material";
import { DestinationDataBaguio } from "./DestionationDataBaguio";
import {
  Destination1,
  Heading,
  Title,
  Description,
  Image1,
} from "./Destination";
import { DestionationBaguioForm } from "./DestinationBaguioForm";

export const DestionationBaguio = () => {
  const [formPopUp, SetFormPopup] = useState(false);
  return (
    <>
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
                    onClick={() => SetFormPopup(true)}
                  >
                    {data.button}
                  </Button>
                  <DestionationBaguioForm
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
export default DestionationBaguio;
