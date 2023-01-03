import styled from "styled-components";
import { device } from "../../MediaQuery";
import { Button } from "@mui/material";
import { FourthColor, FifthColor } from "../../Global";
const Container = styled.div`
  margin: 4rem 6rem;
  color: #2a2a2a;
  h1 {
    text-align: center;
  }
  @media ${device.BreakPoint} {
    margin: 4rem 2rem;
  }
  form {
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    width: 50%;
    border-color: #808080;
    margin: auto;
    @media ${device.BreakPoint} {
      padding-top: 2rem;
      width: 90%;
    }
  }
  input {
    font-size: 20px;
    height: 3rem;
    padding: 0 1rem;
    margin-bottom: 2rem;
    border-radius: 0.3rem;
    border: 1px solid #808080
  }
  textarea {
    font-size: 20px;
    padding: 1rem;
    margin-bottom: 2rem;
    border-radius: 0.3rem;
    border: 1px solid #250e0e;
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
export const ContactForm = () => {
  return (
    <>
      <Container>
        <h1>Send a message to us!</h1>
        <form>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Subject" />
          <textarea placeholder="Message" rows="4"></textarea>
          <Button className="Button" variant="contained">
            Send Message
          </Button>
        </form>
      </Container>
    </>
  );
};
export default ContactForm;
