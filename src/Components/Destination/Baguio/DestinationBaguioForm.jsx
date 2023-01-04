import { Button } from "@mui/material";
import { DestinationDataBaguio } from "./DestionationDataBaguio";
import styled from "styled-components";
import { useState } from "react";
import { database } from "../../../firebase";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";

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
      margin-right: 1em;
      height: 2rem;
      padding: 0 1rem;
      margin-bottom: 2rem;
      border-radius: 0.3rem;
      border: 1px solid #808080;
      font-size: 16px;
    }
    .Submit_Button {
      width: 50%;
      background: rgb(73, 138, 244);
    }
    textarea {
      border: 1px solid #808080;
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
  const [FirstName, setFirstName] = useState();
  const [MiddleName, setMiddleName] = useState();
  const [LastName, setLastName] = useState();
  const [PhoneNumber, setPhoneNumber] = useState();
  const [Location, setLocation] = useState();

  const usersCollectionRef = collection(database, "Baguio Travel Form");

  const handleSubmit = () => {
    addDoc(usersCollectionRef, {
      FirstName: FirstName,
      MiddleName: MiddleName,
      LastName: LastName,
      PhoneNumber: PhoneNumber,
      Location: Location,
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
            document.location = "http://localhost:3000/";
          })
        );
      })
      .catch((error) => {
        alert(error);
      });
  };
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
                  <input
                    id="FirstName"
                    placeholder="First Name:"
                    value={FirstName}
                    onChange={(event) => {
                      setFirstName(event.target.value);
                    }}
                  />
                  <input
                    id="MiddleName"
                    placeholder="Middle Name:"
                    value={MiddleName}
                    onChange={(event) => {
                      setMiddleName(event.target.value);
                    }}
                  />
                  <input
                    id="LastName"
                    placeholder="Last Name:"
                    value={LastName}
                    onChange={(event) => {
                      setLastName(event.target.value);
                    }}
                  />
                  <input
                    id="MobileNumber"
                    placeholder="Mobile Number: "
                    value={PhoneNumber}
                    onChange={(event) => {
                      setPhoneNumber(event.target.value);
                    }}
                  />
                  <br></br>
                  <input
                    id="Location"
                    placeholder="Location of Pickup: "
                    value={Location}
                    onChange={(event) => {
                      setLocation(event.target.value);
                    }}
                  />
                  <br></br>
                  <Button
                    className="Submit_Button"
                    variant="contained"
                    onClick={handleSubmit}
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

export default DestionationBaguioForm;
