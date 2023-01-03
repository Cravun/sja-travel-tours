import { Button } from "@mui/material";
import styled from "styled-components";
import { DestinationDataBaguio } from "./DestionationDataBaguio";
import { Container, Form } from "./DestinationForm";
export const DestionationBaguioForm = (props) => {
  return props.trigger ? (
    <>
      <Container>
        <Form>
          {DestinationDataBaguio.map((data) => {
            return (
              <>
                <h3>Travel Form</h3>
                <h3>{data.title}</h3>
                <form>
                  <input placeholder="First Name:" />
                  <input placeholder="Last Name:" />
                  <input placeholder="Family Name:" />
                  <input placeholder="Mobiler Number:" />
                  <br></br>
                  <input placeholder="Email" />
                  <br></br>
                  <input placeholder="Subject" />
                  <br></br>
                  <Button
                    className="Submit_Button"
                    variant="contained"
                    type="submit"
                  >
                    Send
                  </Button>
                </form>
              </>
            );
          })}

          <Button className="Close" onClick={() => props.setTrigger(false)}>
            Close
          </Button>
          {props.children}
        </Form>
      </Container>
    </>
  ) : (
    ""
  );
};
