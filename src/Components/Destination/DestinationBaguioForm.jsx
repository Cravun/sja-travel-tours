import { Button } from "@mui/material";
import styled from "styled-components";
import { DestinationDataBaguio } from "./DestionationDataBaguio";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
`;
const Form = styled.div`
  position: relative;
  padding: 32px;
  border-radius: 13px;
  width: 100%;
  max-width: 640px;
  background-color: #fff;
  left: 0;
  right: 0;
  text-align: center;
  margin: auto;
  form {
    input {
      height: 2rem;
      padding: 0 1rem;
      margin-bottom: 2rem;
      border-radius: 0.3rem;
      border: 1px solid #808080;
    }
    .Submit_Button {
      width: 220px;
      background: rgb(73, 138, 244);
    }
  }
  .Close {
    position: absolute;
    top: 16px;
    right: 16px;
    text-align: center;
    color: rgb(249, 249, 249);
    text-transform: none;
    background: rgb(73, 138, 244);
  }
`;

export const DestionationBaguioForm = (props) => {
  return props.trigger ? (
    <>
      <Container>
        <Form>
          {DestinationDataBaguio.map((data) => {
            return (
              <>
                <h3>{"Travel Form for " + data.title}</h3>
                <form>
                  <input placeholder="Name" />
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
