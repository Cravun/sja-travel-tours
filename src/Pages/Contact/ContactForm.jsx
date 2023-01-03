import styled from "styled-components";
import { device } from "../../MediaQuery";
import { Button } from "@mui/material";
import { FourthColor, FifthColor } from "../../Global";
import { useState } from "react";
import { database } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import {} from "firebase/firestore";
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
    border: 1px solid #808080;
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
  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [Subject, setSubject] = useState();
  const [Message, setMessage] = useState();

  const usersCollectionRef = collection(database, "Contact");

  const handleSubmit = () => {
    addDoc(usersCollectionRef, {
      Name: Name,
      Email: Email,
      Subject: Subject,
      Message: Message,
    })
      .then(() => {
        if (
          !Swal.fire({
            position: "center",
            icon: "success",
            title: "Form Submitted Succesfully!",
            showCancelButton: false, // There won't be any cancel button
            showConfirmButton: false, // There won't be any confirm button
          }).then(() => {
            document.location = "http://localhost:3000/Contact";
          })
        );
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <>
      <Container>
        <h1>Send a message to us!</h1>
        <form>
          <input
            id="Name"
            placeholder="Name"
            value={Name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <input
            id="Email"
            placeholder="Email"
            value={Email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            id="Subject"
            placeholder="Subject"
            value={Subject}
            onChange={(event) => {
              setSubject(event.target.value);
            }}
          />
          <textarea
            id="Message"
            placeholder="Message"
            rows="4"
            value={Message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          ></textarea>
          <Button className="Button" variant="contained" onClick={handleSubmit}>
            Send Message
          </Button>
        </form>
      </Container>
    </>
  );
};
export default ContactForm;
