import "./styles/scss/home.scss";
// Pictures
import Service1 from "../../assets/png/Service1.png";
import Service2 from "../../assets/png/Service2.png";
import Service3 from "../../assets/png/Service3.png";
export const Home = () => {
  return (
    <div className="Home-Container">
      <h1>
        Providing you with comfort and relaxation across the nation at the
        cheapest rates.
      </h1>
      <div className="Book-Container">
        <div className="Service">
          <img src={Service1} alt="Service 1" />
        </div>
        <div className="Service">
          <img src={Service2} alt="Service 2" />
        </div>
        <div className="Service">
          <img src={Service3} alt="Service 3" />
        </div>
      </div>
    </div>
  );
};
export default Home;
