import styled from "styled-components";
import { device } from "../../MediaQuery";

const Container = styled.div`
  background: #ffcc34;
  color: #fff;
  padding: 4rem 6rem;
  @media ${device.BreakPoint} {
    padding: 4rem 2rem;
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  text-align: start;
  justify-content: space-between;
  flex-wrap: wrap;
  h1 {
    color: white;
  }
  p {
    color: white;
  }
  i {
    color: #fff;
    font-size: 2rem;
    margin-left: 1rem;
    &:hover {
      color: black;
    }
    @media ${device.BreakPoint} {
      margin: 1rem 1rem 0 0;
    }
  }
`;
const Bottom = styled.div`
  padding-top: 2rem;
  text-align: start;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  div {
    display: flex;
    flex-direction: column;
    @media ${device.BreakPoint} {
      width: 50%;
    }
  }
  h4 {
    font-size: 1.3rem;
    padding: 1rem 0 0.8rem 0;
  }
  a {
    text-decoration: none;
    color: #fafafa;
    padding-bottom: 0.4rem;
    font-size: 1.1rem;
  }
`;

const Footer = () => {
  return (
    <>
      <Container>
        <Top>
          <div>
            <h1>Sja Travel & Tours</h1>
            <p>Choose your favourite destination.</p>
          </div>
          <div>
            <a href="https://fontawesome.com/">
              <i className="fa-brands fa-facebook-square"></i>
            </a>
            <a href="https://fontawesome.com/">
              <i className="fa-brands fa-instagram-square"></i>
            </a>
          </div>
        </Top>

        <Bottom>
          <div>
            <h4>Project</h4>
            <a href="https://fontawesome.com/">Changelog</a>
            <a href="https://fontawesome.com/">Status</a>
            <a href="https://fontawesome.com/">License</a>
            <a href="https://fontawesome.com/">All Versions</a>
          </div>
          <div>
            <h4>Community</h4>
            <a href="https://fontawesome.com/">GitHub</a>
            <a href="https://fontawesome.com/">Issues</a>
            <a href="https://fontawesome.com/">Project</a>
            <a href="https://fontawesome.com/"> Twitter</a>
          </div>
          <div>
            <h4>Help</h4>
            <a href="https://fontawesome.com/">Support</a>
            <a href="https://fontawesome.com/">Troubleshooting</a>
            <a href="https://fontawesome.com/">Contact Us</a>
          </div>
          <div>
            <h4>Others</h4>
            <a href="https://fontawesome.com/">Terms of Service</a>
            <a href="https://fontawesome.com/">Privacy Policy</a>
            <a href="https://fontawesome.com/">License</a>
          </div>
        </Bottom>
      </Container>
    </>
  );
};

export default Footer;
