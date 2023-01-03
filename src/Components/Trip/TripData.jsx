import styled from "styled-components";
import { device } from "../../MediaQuery";
const Card = styled.div`
  width: 32%;
  text-align: start;
  box-shadow: 0 5px 25px 2px rgba(0, 0, 0, 0.11);
  border-radius: 7px;
  cursor: pointer;
  padding: 1rem 0.8rem;
  @media ${device.BreakPoint} {
    margin-bottom: 1.5rem;
    width: 100%;
  }
  h4 {
    font-size: 1.3rem;
    padding: 0.9rem 0 0.2rem 0;
  }
`;
const Image = styled.div`
  height: 200px;
  overflow: hidden;
  border-radius: 7px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 7px;
    object-fit: cover;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: scale(1.3);
      overflow: hidden;
    }
  }
`;
function TripData(props) {
  return (
    <Card>
      <Image>
        <img src={props.image} alt="trip" />
      </Image>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </Card>
  );
}

export default TripData;
