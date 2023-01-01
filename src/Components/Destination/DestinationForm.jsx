import styled from "styled-components";
import { useState } from "react";
import { Button } from "@mui/material";
import { DestinationData } from "./DestinationData";
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
  width: 100%;
  max-width: 640px;
  background-color: #fff;
  left: 0;
  right: 0;
  text-align: center;
  margin: auto;
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

export const DestionationForm = (props) => {
  return props.trigger ? (
    <>
      <Container>
        <Form>
          {DestinationData.map((data) => {
            return (
              <>
                <h3>{data.title}</h3>
                <Button
                  className="Close"
                  onClick={() => props.setTrigger(false)}
                >
                  Close
                </Button>
                {props.children}
              </>
            );
          })}
        </Form>
      </Container>
    </>
  ) : (
    ""
  );
};

export default DestionationForm;
