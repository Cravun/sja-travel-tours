import TripData from "./TripData";
import { device } from "../../MediaQuery";
import Mactan from "../../assets/png/Mactan.jpg";
import Palawan from "../../assets/png/Palawan.jpg";
import Batanes from "../../assets/png/Batanes.jpg";
import Vigan from "../../assets/png/Vigan.jpg";
import Boracay from "../../assets/png/Boracay.jpg";
import Sagada from "../../assets/png/Sagada.jpg";

import styled from "styled-components";

const Container = styled.div`
  margin: 4rem 6rem;
  text-align: center;
  @media ${device.BreakPoint} {
    margin: 4rem 2rem;
  }
  h1 {
    font-size: 3rem;
  }
`;
const TripCard = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  @media ${device.BreakPoint} {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
  }
`;

export const Trip = () => {
  return (
    <Container>
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <TripCard>
        <TripData
          image={Mactan}
          heading="Trip in Mactan, Cebu"
          text="Bohol is one of the top Visayas tourist destinations and top tourist attractions in the Philippines that merits international 
          attention. It is well-known for being the location of the famed Chocolate Hills and Tarsier sanctuaries."
        />
        <TripData
          image={Palawan}
          heading="Trip in Western Visayas, Palawan"
          text="Palawan ranked as the most beautiful island in the world this year, as the clear aquamarine water, limestone cliffs, and lagoons of the island province of the Philippines are only the most basic highlights, says contributing editor Cynthia Drescher.
           Palawan is home to nature reserves on both land and sea, with dolphins just offshore, marine gardens of giant clam, 
          sea turtles nesting on white sand beaches, 600 species of butterflies, and lush palm forest like a Gilligan’s Island fever dream.
          Indian and European cultural influences."
        />
        <TripData
          image={Batanes}
          heading="Trip in Cagayan, Batanes"
          text="Batanes’ refreshingly chill and peaceful vibe gives local and foreign travelers a different taste of island life. One that is simpler, laidback, quiet, but definitely revitalizing.
          For a country that is known for its tropical islands, Batanes’ rock formations, quaint lighthouses, and wild horses that roam freely in vast pastureland make it a truly unique destination for many people.
          If you’re planning a trip to this part of the Philippines, we offer you this ultimate guide on everything you need to know for the perfect getaway. "
        />
      </TripCard>

      <TripCard>
        <TripData
          image={Vigan}
          heading="Trip in Vigan City"
          text="Vigan is the most intact example in Asia of a planned Spanish colonial town, established in the 16th century. 
          Its architecture reflects the coming together of cultural elements from elsewhere in the Philippines and from China with those of Europe and Mexico to create a unique culture and townscape without parallels anywhere in East and South-East Asia."
        />
        <TripData
          image={Boracay}
          heading="Trip in Boracay Island"
          text="Escape to one of the best islands in the world, Boracay in the Philippines! Find out the best time to go, how to get there, 
          the top things to do and see, where to eat, best hotels and resorts to stay in, and other travel tips with this ultimate travel guide. "
        />
        <TripData
          image={Sagada}
          heading="Trip in Mountain Province, Sagada "
          text="Sagada is known for its scenic and calming mountain valleys, rice fields, limestone caves, refreshing waterfalls, 
          and cliffs that come with a sea of clouds. Add to that the friendly Igorot locals, fresh servings of food, coffee, and lemon pies. "
        />
      </TripCard>
    </Container>
  );
};
